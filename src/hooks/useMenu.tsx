import {useEffect, useState} from 'react';

import {useTranslation} from 'react-i18next';
import {fetchMockMenu, MenuItem} from "../service/admin/menu/MenuService";

export const useMenu = () => {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
    const {i18n} = useTranslation();

    useEffect(() => {
        const loadMenu = async () => {
            const items = await fetchMockMenu(i18n.language);
            setMenuItems(items);
        };

        loadMenu();
    }, [i18n.language]);

    return {menuItems};
};