import {theme, ThemeConfig} from "antd";

const lightTheme: ThemeConfig = {
    algorithm: theme.defaultAlgorithm,
    token: {
        colorPrimary: '#1890ff',
        colorBgContainer: '#ffffff',
        colorText: '#222222',
        borderRadius: 6,
        fontFamily: "'Inter', sans-serif",
    },
    components: {
        Button: {
            colorPrimary: '#1890ff',
            borderRadius: 6,
        },
        Input: {
            borderRadius: 6,
        },
        Card: {
            colorBgContainer: 'rgb(255, 255, 255)',
        },
    },
};
export {lightTheme};
const darkTheme: ThemeConfig = {
    algorithm: theme.darkAlgorithm,
    token: {
        colorPrimary: '#1890ff',
        colorBgContainer: '#1f1f1f',
        colorText: '#f0f0f0',
        borderRadius: 6,
        fontFamily: "'Inter', sans-serif",
    },
    components: {
        Button: {
            colorPrimary: '#1890ff',
            borderRadius: 6,
        },
        Input: {
            borderRadius: 6,
        },
        Card: {
            colorBgContainer: 'rgb(31, 31, 31)',
        },
        Layout: {
            headerBg: '#1f1f1f',
            bodyBg: '#141414',
        },
        Menu: {
            itemBg: '#1f1f1f',
            itemHoverBg: '#2a2a2a',
            itemSelectedBg: '#2a2a2a',
        },
    },
};
export {darkTheme};