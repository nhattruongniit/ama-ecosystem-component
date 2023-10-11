import React from 'react';
import { Table } from 'antd';

// hooks
import { ITableProps } from '../table';

export const BasicTable: React.FC<ITableProps> = ({
  columns,
  dataSource,
  ...props
}) => {
  return <Table columns={columns} dataSource={dataSource} {...props} />;
};
