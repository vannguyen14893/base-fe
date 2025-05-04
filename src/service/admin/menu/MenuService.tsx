import {getIconComponent} from "../../../utils/IconMapper";

const mockMenuData = [
    {
        id: 1,
        key: 'home',
        path: '/',
        icon: 'HomeOutlined',
        order: 1,
        translations: {
            en: 'Home',
            vi: 'Trang chủ'
        }
    },
    {
        id: 2,
        key: 'dashboard',
        path: '/dashboard',
        icon: 'DashboardOutlined',
        order: 2,
        translations: {
            en: 'Dashboard',
            vi: 'Bảng điều khiển'
        }
    },
    {
        id: 3,
        key: 'products',
        path: '/products',
        icon: 'AppstoreOutlined',
        order: 3,
        translations: {
            en: 'Products',
            vi: 'Sản phẩm'
        },
        children: [
            {
                id: 4,
                key: 'electronics',
                path: '/products/electronics',
                order: 1,
                translations: {
                    en: 'Electronics',
                    vi: 'Điện tử'
                }
            },
            {
                id: 5,
                key: 'clothing',
                path: '/products/clothing',
                order: 2,
                translations: {
                    en: 'Clothing',
                    vi: 'Quần áo'
                }
            }
        ]
    }
];

export const fetchMockMenu = async (lang: string): Promise<MenuItem[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));

    const transformItem = (item: any): MenuItem => ({
        key: item.key,
        path: item.path,
        icon: item.icon ? getIconComponent(item.icon) : undefined,
        label: item.translations[lang] || item.translations.en || item.key,
        children: item.children ? item.children.map(transformItem) : undefined
    });

    return mockMenuData.map(transformItem);
};

export interface MenuItem {
    key: string;
    path: string;
    icon?: React.ReactNode;
    label: string;
    children?: MenuItem[];
}