/* eslint-disable @typescript-eslint/no-explicit-any */
import { ColumnsType } from 'antd/es/table';

export interface IColumnSearchProps {
  name?: string;
}

export interface IColumnFilterProps {
  name?: string;
  options?: IFilterDropdownProps[];
}

export interface IQueryObject {
  [key: string]: any;
}

export interface IActiveTableIcon {
  [key: string]: boolean;
}

export interface IFilterDropdownProps {
  value: string;
  text: string;
}

export interface ITableProps {
  columns: ColumnsType<any>;
  dataSource: any;
}

export type IColumnProps = {
  onCallbackSearch?: (value: IQueryObject) => void;
};
