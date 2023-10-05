import React, { useState } from 'react';

// antd
import { Avatar, Button, Dropdown, Layout, MenuProps, Switch } from 'antd';

// components
import SideBar from './components/SideBar';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;

type IProps = {
  children: React.ReactNode;
  fieldRender?: React.ReactNode;
  dropdownItems?: MenuProps['items'];
  onLogout?: () => void;
};

export const Piano: React.FC<IProps> = ({
  // states
  children,
  fieldRender,
  dropdownItems,
  // actions
  onLogout,
}) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [collapsed, setCollapsed] = useState(false);

  React.useEffect(() => {
    window.localStorage.setItem('colorMode', mode);
    document.documentElement.classList.add(mode);
  }, [mode]);

  const setColorMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.documentElement.classList.remove('light');
    } else {
      setMode('light');
      document.documentElement.classList.remove('dark');
    }
  };

  const items: MenuProps['items'] = dropdownItems || [
    {
      key: '1',
      label: (
        <div className="cursor-pointer" onClick={onLogout}>
          Logout
        </div>
      ),
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideBar collapsed={collapsed} colorBgContainer="rgb(255, 255, 255)" />

      <Layout style={{ marginLeft: collapsed ? 80 : 256 }}>
        <Header
          className="p-0 flex items-center justify-between pr-4"
          style={{ background: '#0050B3' }}
        >
          <div className="flex items-center">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              className="text-[16px] w-[64px] h-full text-[#fff]"
            />

            {fieldRender}
          </div>

          <div>
            <div className="hidden">
              <Switch
                checkedChildren="🌛"
                unCheckedChildren="🔆"
                onChange={setColorMode}
                defaultChecked={mode === 'dark'}
              />
            </div>
            <Dropdown
              className="ml-auto"
              menu={{ items }}
              placement="bottomRight"
            >
              <div className="flex px-0 py-2 text-sm text-white transition-all ease-nav-brand flex-row items-center cursor-pointer  ml-auto">
                <div className="relative mr-[10px]">
                  <Avatar
                    className="rounded-full"
                    src="https://cdn.iconscout.com/icon/free/png-512/free-avatar-370-456322.png?f=avif&w=256"
                    alt="Tony Nguyen"
                  />
                </div>
                <span className="sm:inline pl-2 text-ellipsis">
                  {'Anonymous'}
                </span>
              </div>
            </Dropdown>
          </div>
        </Header>
        <Content
          style={{
            padding: 26,
            minHeight: 280,
            background: '#fff',
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
