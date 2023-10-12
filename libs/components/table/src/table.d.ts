/* eslint-disable @typescript-eslint/no-explicit-any */
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

export type IColumnProps = {
  onSearch?: (value: IQueryObject) => void;
  onFilter?: (value: IQueryObject) => void;
};

export type IPaginationProps = {
  total?: number;
  pageSize?: number;
  pageSizeOptions?: number[];
};
