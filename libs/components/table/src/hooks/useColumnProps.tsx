/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Button, Input, Space } from 'antd';
import { FilterDropdownProps } from 'antd/es/table/interface';

// types
import {
  IActiveTableIcon,
  IColumnFilterProps,
  IColumnProps,
  IFilterDropdownProps,
  IQueryObject,
} from '../table';
import { FilterOutlined, SearchOutlined } from '@ant-design/icons';

// components
import { ManualFilterDropdown } from '../filters/ManualFilterDropdown';

export const useColumnProps = ({ onCallbackSearch }: IColumnProps) => {
  const [activeIcon, setActiveIcon] = React.useState<IActiveTableIcon>(
    [].reduce((acc, curr) => {
      return {
        ...acc,
        [curr]: false,
      };
    }, {} as IActiveTableIcon)
  );

  // refs
  const searchInputRef = React.useRef<any>(null);
  const filtersRef = React.useRef<IQueryObject | null>(null);

  const _handleSearch = (name: string, selectedKeys: string[]) => {
    filtersRef.current = {
      ...filtersRef.current,
      [name]: selectedKeys[0],
    };
    // set active icon filter
    setActiveIcon((prevState) => ({
      ...prevState,
      [name]: Boolean(selectedKeys[0]),
    }));

    if (onCallbackSearch) {
      onCallbackSearch(filtersRef.current);
    }
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
  };

  function _handleFilter(name: string, values: IFilterDropdownProps[]) {
    filtersRef.current = {
      ...filtersRef.current,
      [name]: values,
    };
    // set active icon filter
    setActiveIcon((prevState) => {
      const newState = { ...prevState, [name]: values.length > 0 };
      return newState;
    });

    if (onCallbackSearch) {
      onCallbackSearch(filtersRef.current);
    }
  }

  const getColumnSearchProps = (name: string) => {
    const _name = name || 'name';
    return {
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        clearFilters,
        close,
      }: FilterDropdownProps) => (
        <div
          className="flex flex-col p-2"
          onKeyDown={(e) => e.stopPropagation()}
        >
          <Input
            ref={searchInputRef}
            allowClear
            placeholder="Search ..."
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() => _handleSearch(_name, selectedKeys as string[])}
            className="mb-2"
            style={{ width: 250 }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => {
                close();
                _handleSearch(_name, selectedKeys as string[]);
              }}
              icon={<SearchOutlined className="relative top-[-2px]" />}
              size="small"
              style={{ width: 90 }}
            >
              Search
            </Button>
            <Button
              onClick={() => {
                close();
                clearFilters && handleReset(clearFilters);
                _handleSearch(_name, []);
              }}
              size="small"
              style={{ width: 90 }}
            >
              Reset
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => {
                close();
              }}
            >
              Close
            </Button>
          </Space>
        </div>
      ),
      filterIcon: () => {
        return (
          <SearchOutlined
            style={{ color: activeIcon[_name] ? '#1677ff' : undefined }}
          />
        );
      },
      onFilterDropdownOpenChange: (visible: boolean) => {
        if (visible) {
          setTimeout(() => searchInputRef.current?.select(), 100);
        }
      },
    };
  };

  const getColumnFilterProps = ({
    name = '',
    options = [],
  }: IColumnFilterProps) => {
    return {
      width: 250,

      filters: options,
      filterIcon: () => {
        return (
          <FilterOutlined
            style={{ color: activeIcon[name] ? '#1677ff' : undefined }}
          />
        );
      },
      filterDropdown: (props: FilterDropdownProps) => {
        return (
          <ManualFilterDropdown
            columnName={name}
            filterProps={props}
            handleFilter={_handleFilter}
          />
        );
      },
    };
  };

  return {
    getColumnSearchProps,
    getColumnFilterProps,
  };
};
