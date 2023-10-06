import React, { useState } from 'react';
import clsx from 'clsx';

// antd
import { Button, Divider, Layout, MenuProps, Switch } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

// assets
import AmanotesIcon from './assets/img/amanotes_icon.png';

// components
import { AccountBar } from './components/AccountBar';
import { FAQBar } from './components/FAQBar';

// types
import { IOptionFQA } from './type';

const { Header, Content, Sider } = Layout;

type IProps = {
  faqItems?: IOptionFQA[];
  dropdownItems?: MenuProps['items'];
  bgColorHeader?: string;
  bgColorSideBar?: string;
  nameUser?: string;
  avatarUser?: string;
  title?: string;
  // react node
  children: React.ReactNode;
  fieldRender?: React.ReactNode;
  accountRender?: React.ReactNode;
  faqRender?: React.ReactNode;
  menuRender?: React.ReactNode;
  // actions
  onLogout?: () => void;
  onBackHome?: () => void;
};

export const Piano: React.FC<IProps> = ({
  // states
  faqItems,
  dropdownItems,
  bgColorHeader = '#0050B3',
  bgColorSideBar = '#fff',
  nameUser,
  avatarUser,
  title = 'Amanotes',
  // react node
  children,
  fieldRender,
  accountRender,
  faqRender,
  menuRender,
  // actions
  onLogout,
  onBackHome,
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

  const ComponentAccountBar = accountRender || (
    <AccountBar
      nameUser={nameUser}
      avatarUser={avatarUser}
      dropdownItems={dropdownItems}
      onLogout={onLogout}
    />
  );

  const ComponentFieldBar = fieldRender || null;
  const ComponentFAQBar = faqRender || <FAQBar faqItems={faqItems} />;
  const MenuItem = menuRender || null;

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <div
        className={clsx(
          'flex flex-col fixed top-0 left-0 h-full bg-white border-0 border-r-[1px]  border-solid border-[#E0E0E0]',
          !collapsed && 'w-[256px]'
        )}
      >
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          className={clsx(
            'max-w-[256px]',
            !collapsed &&
              'w-[256px] border-0 border-r-[1px] border-solid border-[#E0E0E0]'
          )}
          style={{
            background: bgColorSideBar,
          }}
        >
          <div
            className="flex items-center justify-center h-[64px] cursor-pointer"
            onClick={onBackHome}
          >
            <img src={AmanotesIcon} alt="Amanotes" className="w-[35px]" />
            {!collapsed && (
              <div className="mb-0 ml-4 dark:text-white text-[24px] font-bold">
                {title}
              </div>
            )}
          </div>
          <Divider className="m-0 dark:border-[#1d1d1d]" />

          {MenuItem}
        </Sider>

        {!collapsed && ComponentFAQBar}
      </div>

      <Layout style={{ marginLeft: collapsed ? 80 : 256 }}>
        <Header
          className={clsx('p-0 flex items-center justify-between pr-4')}
          style={{ background: bgColorHeader }}
        >
          <div className="flex items-center">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              className="text-[16px] w-[64px] h-full text-[#fff]"
            />

            {ComponentFieldBar}
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

            {ComponentAccountBar}
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
