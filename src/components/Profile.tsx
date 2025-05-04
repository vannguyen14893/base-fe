import {Card, Typography} from "antd";
import React from "react";

const {Title} = Typography;

export default function Profile() {
    return (
        <Card>
            <Title level={2}>Xin chào</Title>
            <p>Đây là trang bảng Profile của bạn</p>
        </Card>
    );
}