import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Menu, Space } from 'antd';
import { MailOutlined, MoneyCollectOutlined } from '@ant-design/icons';
export default function App() {
  return (
    <div>
      <Menu mode="horizontal" defaultSelectedKeys={['invoices']}>
        <Space style={{margin: '0px 20px'}}><h1>Book keeper</h1></Space>
        <Menu.Item key="invoices" icon={<MailOutlined />}>
          <NavLink to={'/invoices'}>Invoices</NavLink>
        </Menu.Item>
        <Menu.Item key="expenses" icon={<MoneyCollectOutlined />}>
          <NavLink to={'/expenses'}>Expenses</NavLink>        
        </Menu.Item>
      </Menu>

      <Outlet />
    </div>
  );
}