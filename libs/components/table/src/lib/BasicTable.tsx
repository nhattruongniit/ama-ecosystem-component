/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Table, TableProps } from 'antd';

export const BasicTable: React.FC<TableProps<any>> = ({ ...props }) => {
  return <Table {...props} />;
};
