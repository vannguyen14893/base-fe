import React from 'react';
import {Menu} from 'antd';
import {Link, useLocation} from 'react-router-dom';
import {MenuItem} from "../../service/admin/menu/MenuService";
import {useMenu} from "../../hooks/useMenu";

const {SubMenu} = Menu;

function AppMenu({handleChange}: { handleChange: (e: any) => void; }) {
    const location = useLocation();
    const {menuItems} = useMenu();
    const renderMenuItems = (items: MenuItem[]) => {
        return items.map(item => {
            if (item.children) {
                return (
                    <SubMenu
                        onClick={handleChange}
                        key={item.key}
                        icon={item.icon}
                        title={item.label}>
                        {renderMenuItems(item.children)}
                    </SubMenu>
                );
            }

            return (
                <Menu.Item key={item.key} icon={item.icon}>
                    <Link to={item.path}>{item.label}</Link>
                </Menu.Item>
            );
        });
    };

    return (
        <Menu
            mode="inline"
            selectedKeys={[location.pathname]}
            defaultOpenKeys={menuItems.filter(item => item.children).map(item => item.key)}>
            {renderMenuItems(menuItems)}
        </Menu>
    );
};

export default AppMenu;