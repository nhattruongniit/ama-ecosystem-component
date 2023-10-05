import clsx from 'clsx';

// antd
import { Layout, Menu, Button, Divider } from 'antd';

// assets
import AmanotesIcon from '../assets/img/amanotes_icon.png';

const { Sider } = Layout;

type IProps = {
  collapsed: boolean;
  colorBgContainer: string;
  onBackHome?: () => void;
};

function SideBar({ collapsed, colorBgContainer, onBackHome }: IProps) {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className={clsx(
        'max-w-[256px] h-[100vh] fixed top-0 left-0 bottom-0 border-0 border-r-[1px] border-solid border-[#E0E0E0] dark:border-[#2b2b2b]',
        !collapsed && 'w-[256px]'
      )}
      style={{
        background: colorBgContainer,
      }}
    >
      <div
        className="flex items-center justify-center h-[64px] cursor-pointer"
        onClick={onBackHome}
      >
        <img src={AmanotesIcon} alt="Amanotes" className="w-[35px]" />
        {!collapsed && (
          <div className="mb-0 ml-4 dark:text-white text-[24px] font-bold">
            Abalyzer
          </div>
        )}
      </div>
      <Divider className="m-0 dark:border-[#1d1d1d]" />
      <Menu
        mode="inline"
        defaultSelectedKeys={['0']}
        style={{
          border: 0,
        }}
        className="border-0 h-[calc(100vh-300px)] overflow-auto"
        items={[{ key: 1, label: 'Dashboard' }]}
      />

      {!collapsed && (
        <div className="mx-2">
          <div
            className="relative flex min-w-0 flex-col items-center break-words rounded-2xl border-0 border-solid border-blue-900 bg-white bg-clip-border shadow-none after:absolute after:top-0 after:bottom-0 after:left-0 after:z-10 after:block after:h-full after:w-full after:rounded-2xl after:content-['']"
            sidenav-card=""
            style={{
              background:
                'linear-gradient(180deg, rgba(233,235,248,1) 0%, rgba(217,217,217,1) 100%)',
            }}
          >
            <div className="relative z-20 flex-auto w-full p-4 text-left ">
              <div className="transition-all duration-200 ease-nav-brand">
                <div className="mb-0 text-[20px]">Need help?</div>
                <p className="mb-4 text-[14px] mt-2">Please check our docs</p>
                <Button
                  className="w-full"
                  href="https://docs.google.com/presentation/d/1wELOrc731cckjw8cvqjqaurSX4VsJoCksGjiqX_xF6c/edit#slide=id.g1434d8e2421_0_864"
                  target="_blank"
                  rel="noreferrer"
                >
                  Platform guidlines
                </Button>
                <Button
                  className="w-full my-3"
                  href="https://docs.google.com/presentation/d/1wELOrc731cckjw8cvqjqaurSX4VsJoCksGjiqX_xF6c/edit#slide=id.g1434d8e2421_0_864"
                  target="_blank"
                  rel="noreferrer"
                >
                  A/B testing guidelines
                </Button>
                <Button type="primary" className="w-full">
                  Report bug
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Sider>
  );
}

export default SideBar;
