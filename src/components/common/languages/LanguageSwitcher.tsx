import React from 'react';
import {Button, Dropdown} from 'antd';
import {GlobalOutlined} from '@ant-design/icons';
import i18n from "i18next";

const LanguageSwitcher: React.FC = () => {
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const items = [
        {key: 'en', label: 'English', onClick: () => changeLanguage('en')},
        {key: 'vi', label: 'Tiếng Việt', onClick: () => changeLanguage('vi')},
    ];

    return (
        <div>
            <Dropdown menu={{items}} placement="bottomRight">
                <Button
                    type="text"
                    icon={<GlobalOutlined/>}
                    style={{color: 'red', float: 'right', fontSize: 20}}
                />
            </Dropdown>
        </div>

    );
};

export default LanguageSwitcher;