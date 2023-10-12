import { Button, Menu, Space, Tag } from 'antd';

import { Piano } from '@ama-ecosystem/theme/piano';
import { BasicTable, useColumnProps } from '@ama-ecosystem/components/table';
import { ColumnsType } from 'antd/es/table';
import React from 'react';

function FieldRender() {
  return <div className="text-white">FieldRender</div>;
}

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const App = () => {
  const [dataSource, setDataSource] = React.useState<any>([]);
  const { getColumnSearchProps, getColumnFilterProps, pagination } =
    useColumnProps({
      onSearch: (values) => {
        console.log('onSearch: ', values);
      },
      onFilter: (values) => {
        console.log('onFilter: ', values);
      },
    });
  const page = pagination.currentPage;
  const pageSize = pagination.pageSize;

  React.useEffect(() => {
    function fetchUser() {
      fetch(
        `https://jsonplaceholder.typicode.com/todos?_limit=${pageSize}&_page=${page}`
      )
        .then((res) => res.json())
        .then((data) => {
          setDataSource(data);
        });
    }
    fetchUser();
  }, [page, pageSize]);

  const columns: ColumnsType<DataType> = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      ...getColumnSearchProps('title'),
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'User Id',
      dataIndex: 'userId',
      key: 'userId',
      ...getColumnSearchProps('userId'),
    },
    {
      title: 'Id',
      ...getColumnFilterProps({
        name: 'Id',
        options: ['hcm', 'hn'].map((type) => ({
          text: type,
          value: type,
        })),
      }),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <Piano
      fieldRender={<FieldRender />}
      menuRender={
        <Menu
          mode="inline"
          defaultSelectedKeys={['0']}
          style={{
            border: 0,
          }}
          className="border-0 h-[calc(100vh-300px)] overflow-auto"
          items={[{ key: 1, label: 'Dashboard' }]}
        />
      }
      faqItems={[
        {
          label: (
            <Button
              href="https://docs.google.com/presentation/d/1wELOrc731cckjw8cvqjqaurSX4VsJoCksGjiqX_xF6c/edit#slide=id.g1434d8e2421_0_864"
              target="_blank"
              rel="noreferrer"
            >
              Platform guidlines
            </Button>
          ),
        },
        {
          label: (
            <Button
              href="https://docs.google.com/presentation/d/1wELOrc731cckjw8cvqjqaurSX4VsJoCksGjiqX_xF6c/edit#slide=id.g1434d8e2421_0_864"
              target="_blank"
              rel="noreferrer"
              className="my-3"
            >
              A/B testing guidelines
            </Button>
          ),
        },
        {
          label: <Button type="primary">Report bug</Button>,
        },
      ]}
    >
      <h2>Table</h2>
      <BasicTable
        columns={columns}
        dataSource={dataSource}
        pagination={{
          ...pagination.paginationProps,
          total: 100,
        }}
      />
      Dashboard
    </Piano>
  );
};

export default App;
