import React, {createContext, useContext, useState} from 'react';
import {ThemeConfig} from 'antd';

interface ThemeContextType {
    theme: ThemeConfig;
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const saved = localStorage.getItem('darkMode');
        return saved ? JSON.parse(saved) : false;
    });
    const lightTheme: ThemeConfig = {
        token: {
            colorPrimary: '#1890ff',
            colorBgContainer: '#ffffff',
            colorText: '#222222',
            borderRadius: 6,
        },
    };

    const darkTheme: ThemeConfig = {
        token: {
            colorPrimary: '#1890ff',
            colorBgContainer: '#1f1f1f',
            colorText: '#f0f0f0',
            borderRadius: 6,
        },
    };

    const toggleTheme = () => {
        setIsDarkMode((prev: any) => {
            const newMode = !prev;
            localStorage.setItem('darkMode', JSON.stringify(newMode));
            return newMode;
        });
    };

    return (
        <ThemeContext.Provider value={{
            theme: isDarkMode ? darkTheme : lightTheme,
            isDarkMode,
            toggleTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};