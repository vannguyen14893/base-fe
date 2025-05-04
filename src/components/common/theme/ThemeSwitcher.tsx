import {Switch} from 'antd';
import {useAppTheme} from "../../../hooks/useAppTheme";

export const ThemeToggle = () => {
    const {isDarkMode, toggleTheme} = useAppTheme();

    return (
        <Switch
            checked={isDarkMode}
            onChange={toggleTheme}
            checkedChildren="🌙"
            unCheckedChildren="☀️"
        />
    );
};