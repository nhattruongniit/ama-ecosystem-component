import React from 'react';
import { TablePaginationConfig } from 'antd/lib/table/interface';

// types
import { IPaginationProps } from '../table.d';

export const usePagination = ({
  total = 10,
  pageSize = 10,
  pageSizeOptions = [10, 20, 50],
}: IPaginationProps) => {
  const [pageOptions, setPageOptions] = React.useState({
    currentPage: 1,
    pageSize,
  });
  const paginationProps: TablePaginationConfig = {
    total,
    pageSize: pageOptions.pageSize,
    pageSizeOptions,
    onChange(page, pageSize) {
      setPageOptions({
        currentPage: page,
        pageSize,
      });
    },
    showSizeChanger: true,
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
  };
  const pagingQuery = {
    limit: pageOptions.pageSize,
    offset: (pageOptions.currentPage - 1) * pageOptions.pageSize,
  };
  const resetPageOptions = () => {
    setPageOptions({
      currentPage: 1,
      pageSize,
    });
  };

  return {
    pageSize: pageOptions.pageSize,
    currentPage: pageOptions.currentPage,
    paginationProps,
    pagingQuery,
    setPageOptions,
    resetPageOptions,
  };
};
