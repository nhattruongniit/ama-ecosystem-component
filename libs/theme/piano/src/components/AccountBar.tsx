import React from 'react';
import { Avatar, Dropdown, MenuProps } from 'antd';

type IProps = {
  nameUser?: string;
  avatarUser?: string;
  dropdownItems?: MenuProps['items'];
  onLogout?: () => void;
};

export function AccountBar({
  nameUser = 'Anonymous',
  avatarUser = 'https://cdn.iconscout.com/icon/free/png-512/free-avatar-370-456322.png?f=avif&w=256',
  dropdownItems,
  onLogout,
}: IProps) {
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
    <Dropdown className="ml-auto" menu={{ items }} placement="bottomRight">
      <div className="flex px-0 py-2 text-sm text-white transition-all ease-nav-brand flex-row items-center cursor-pointer  ml-auto">
        <div className="relative mr-[10px]">
          <Avatar className="rounded-full" src={avatarUser} alt={nameUser} />
        </div>
        <span className="sm:inline pl-2 text-ellipsis">{nameUser}</span>
      </div>
    </Dropdown>
  );
}
