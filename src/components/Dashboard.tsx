import React from 'react';
import {Card, Typography} from 'antd';
import {useAuth} from "../provider/AuthProvider";

const {Title} = Typography;

export default function Dashboard() {
    const {user} = useAuth();

    return (
        <Card>
            <Title level={2}>Xin chào {user?.username}</Title>
            <p>Đây là trang bảng điều khiển của bạn</p>
        </Card>
    );
}