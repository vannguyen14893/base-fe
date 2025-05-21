import React, {useEffect, useRef, useState} from 'react';
import {Avatar, Button, Dropdown, Layout, theme} from 'antd';
import {Link} from 'react-router-dom';
import AppMenu from "./AppMenu";
import LanguageSwitcher from "../common/languages/LanguageSwitcher";
import './css/index.css';
import {useAppTheme} from "../../hooks/useAppTheme";
import {ThemeToggle} from "../common/theme/ThemeSwitcher";
import {LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined} from "@ant-design/icons";
import {useAuth} from "../../provider/AuthProvider";
import {RedocStandalone} from "redoc";
import {darkTheme, lightTheme} from "../../config/theme";
import services from "../../json/services.json"

const {Header, Content, Sider} = Layout;
const MainLayout: React.FC = () => {
    const {isDarkMode} = useAppTheme();
    const [collapsed, setCollapsed] = useState(false);
    const {user, logout} = useAuth();
    const [fileName, setFileName] = useState('');
    const handleChange = (value: any) => {
        services.filter(item => item.label === value.key).map(item => setFileName(item.key));
    };

    useEffect(() => {
        //  setFileName(services[0].key);
    }, [fileName])
    const menuItems = [
        {
            key: 'profile',
            icon: <UserOutlined/>,
            label: <Link to="/profile">Hồ sơ</Link>,
        },
        {
            key: 'logout',
            icon: <LogoutOutlined/>,
            label: 'Đăng xuất',
            onClick: logout,
        },
    ];
    const {
        token: {colorBgContainer, colorText, colorBorder},
    } = theme.useToken();

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider width={250}
                   style={{
                       background: colorBgContainer,
                       borderRight: `1px solid ${colorBorder}`,
                       height: '100vh',
                       position: 'sticky',
                       top: 0,
                       left: 0,
                   }}
                   collapsed={collapsed}
                   collapsible
                   trigger={null}
                   theme={isDarkMode ? 'dark' : 'light'}>
                <div className="logo" style={{backgroundColor: colorBgContainer, color: colorText}}>ITECH</div>
                <AppMenu handleChange={handleChange}/>
            </Sider>
            <Layout>
                <Header style={{
                    padding: 0,
                    display: 'flex',
                    background: colorBgContainer,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: `1px solid ${colorBorder}`
                }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <div style={{
                        padding: 0,
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center'
                    }}>
                        <ThemeToggle/>
                        <LanguageSwitcher/>
                        <Dropdown menu={{items: menuItems}} placement="bottomRight">
                            <Button type="text">
                                <Avatar icon={<UserOutlined/>}/>
                                <span style={{color: colorText}}>{user?.username}</span>
                            </Button>
                        </Dropdown>
                    </div>

                </Header>
                <Content style={{margin: '10px', background: colorBgContainer}}>
                    {fileName ? <RedocStandalone
                        specUrl={fileName}
                        options={{
                            nativeScrollbars: true,
                            theme: isDarkMode ? darkTheme : lightTheme,
                            scrollYOffset: 60,
                            hideDownloadButton: false,
                            expandSingleSchemaField: true,
                            menuToggle: true,
                        }}/> : null}

                    {/*<Outlet/>*/}
                </Content>
            </Layout>
        </Layout>
    );
};

export default MainLayout;