import {
    HomeOutlined,
    DesktopOutlined,
    AppstoreOutlined,
    UserOutlined,
    DashboardOutlined
} from '@ant-design/icons';

const iconComponents: Record<string, React.ReactNode> = {
    'HomeOutlined': <HomeOutlined/>,
    'DesktopOutlined': <DesktopOutlined/>,
    'AppstoreOutlined': <AppstoreOutlined/>,
    'UserOutlined': <UserOutlined/>,
    'DashboardOutlined': <DashboardOutlined/>
};

export const getIconComponent = (iconName: string): React.ReactNode => {
    return iconComponents[iconName] || null;
};