/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Button, Checkbox, Divider, Input, Tooltip } from 'antd';

// types
import { IFilterDropdownProps } from '../table';
import { FilterDropdownProps } from 'antd/es/table/interface';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

type IProps = {
  columnName: string;
  filterProps: FilterDropdownProps;
  handleFilter: (column: string, values: IFilterDropdownProps[]) => void;
  hideInputSearch?: boolean;
  hasShowValue?: boolean;
};

export function ManualFilterDropdown({
  columnName,
  filterProps,
  handleFilter,
  hideInputSearch = false,
  hasShowValue = false,
}: IProps) {
  const [filters, setFilters] = React.useState<any[]>(
    filterProps.filters || []
  );
  const [options, setOptions] = React.useState<IFilterDropdownProps[]>([]);

  function onSubmit() {
    // close dropdown
    filterProps.confirm({
      closeDropdown: true,
    });
    // push filter
    handleFilter(columnName, options);
  }

  const onChange = (e: CheckboxChangeEvent) => {
    if (!filterProps.filters) return;
    const { value, checked } = e.target;

    // add item
    if (checked) {
      const item = filterProps.filters.find((item) => item.value === value);
      if (item) {
        setOptions((prevState) => {
          return [...prevState, item] as IFilterDropdownProps[];
        });
      }
      return;
    }

    // remove item
    setOptions((prevState) => {
      const cloned = [...prevState];
      const itemIndex = cloned.findIndex((item) => item.value === value);
      if (itemIndex > -1) {
        cloned.splice(itemIndex, 1);
        return cloned;
      }
      return cloned;
    });
  };

  const onReset = () => {
    // close dropdown
    filterProps.close();

    // reset options
    setOptions([]);
    handleFilter(columnName, []);
  };

  const filterCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchVal = e.target.value;
    const defaultOptions = filterProps.filters || ([] as any[]);
    // reset filter
    if (searchVal === '') {
      setFilters(defaultOptions);
      return;
    }

    const result = defaultOptions.filter((item) => {
      const byText =
        item.text.toLowerCase().includes(searchVal.toLowerCase()) ||
        item.value.toLowerCase().includes(searchVal.toLowerCase());
      return byText;
    });
    setFilters(result);
  };

  return (
    <div className="max-w-[270px]">
      {!hideInputSearch && (
        <div
          className="flex items-center p-3"
          onKeyDown={(e) => e.stopPropagation()}
        >
          <Input
            placeholder="Search ..."
            className="mr-2"
            onChange={filterCheckbox}
          />
        </div>
      )}

      <Divider className="m-0 " />

      <div className="flex flex-col pb-3 px-3 pt-2 overflow-y-auto max-h-[350px] overflow-hidden">
        {filters.map((item, index) => {
          const isChecked = options.some(
            (option) => option.value === item.value
          );
          return (
            <Checkbox
              key={index}
              value={item.value}
              checked={isChecked}
              onChange={onChange}
              style={{ margin: 0, marginBottom: 10 }}
            >
              <Tooltip title={`${item.text}-${item.value}`}>
                <div className="flex">
                  <span className="shrink-0 mr-1">{item.text}</span>

                  {hasShowValue && (
                    <span className="shrink-0 w-[100px] break-all whitespace-nowrap overflow-hidden text-ellipsis">
                      - {item.value}
                    </span>
                  )}
                </div>
              </Tooltip>
            </Checkbox>
          );
        })}
      </div>

      <Divider className="m-0" />
      <div className="flex justify-between p-2">
        <Button
          type="text"
          className="px-1"
          onClick={onReset}
          disabled={options.length === 0}
        >
          Reset
        </Button>
        <Button type="primary" onClick={onSubmit}>
          Ok
        </Button>
      </div>
    </div>
  );
}
