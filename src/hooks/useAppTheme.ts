import {ThemeConfig} from 'antd';
import {useTheme} from "../context/theme/ThemeContext";

export const useAppTheme = (): {
    theme: ThemeConfig;
    isDarkMode: boolean;
    toggleTheme: () => void;
} => {
    return useTheme();
};