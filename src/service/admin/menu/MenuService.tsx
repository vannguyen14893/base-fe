import {getIconComponent} from "../../../utils/IconMapper";

const mockMenuData = [
    {
        id: 1,
        key: 'payment-hub',
        path: '/',
        icon: 'HomeOutlined',
        order: 1,
        translations: {
            en: 'Payment Hub',
            vi: 'Payment Hub'
        },
        children: [
            {
                id: 9,
                key: 'edc-payment-hub',
                order: 1,
                translations: {
                    en: 'Edc-payment-hub',
                    vi: 'Edc-payment-hub'
                }
            },
            {
                id: 10,
                key: 'thai-qr-payment-hub',
                order: 2,
                translations: {
                    en: 'Thai-qr-payment-hub',
                    vi: 'Thai-qr-payment-hub'
                }
            }
        ]
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