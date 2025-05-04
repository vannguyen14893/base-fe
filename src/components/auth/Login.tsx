import React from 'react';
import {Button, Form, Input, message} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {useAuth} from "../../provider/AuthProvider";
import {useTranslation} from "react-i18next";

interface LoginFormValues {
    phone: string;
    password: string;
}

export default function Login() {
    const {login} = useAuth();

    const [form] = Form.useForm<LoginFormValues>();
    // @ts-ignore
    const {t} = useTranslation(['auth', 'common']);
    const onFinish = async (values: LoginFormValues) => {
        const result = await login(values);
        if (!result.success) {
            message.error(result.error || 'Đăng nhập thất bại');
        }
    };

    return (
        <div style={{maxWidth: 500, margin: '0 auto', padding: 40}}>
            <h1 style={{textAlign: 'center', marginBottom: 24}}>{t('auth:login.title')}</h1>
            <Form
                form={form}
                name="login"
                onFinish={onFinish}
                autoComplete="off">
                <Form.Item<LoginFormValues>
                    initialValue={'1234567890'}
                    name="phone"
                    rules={[
                        {required: true, message: t('auth:login.phone.required')}]}>
                    <Input prefix={<UserOutlined/>} placeholder={t('auth:login.phone.placeholder')}/>
                </Form.Item>

                <Form.Item<LoginFormValues>
                    name="password"
                    initialValue={'123456a@'}
                    rules={[{required: true, message: t('auth:login.password.required')}]}>
                    <Input.Password prefix={<LockOutlined/>} placeholder={t('auth:login.password.placeholder')}/>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                        {t('common:login.button')}
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}