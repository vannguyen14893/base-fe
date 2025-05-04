import {AuthProviderProps} from "../dto/AuthProviderProps";
import {useContext, useEffect, useState} from "react";
import {User} from "../dto/User";
import {AuthContext} from "../context/auth/AuthContext";
import {AuthContextType} from "../dto/AuthContextType";
import {message} from 'antd';
import LoginService from "../service/authen/LoginService";

export function AuthProvider({children}: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const clientId = process.env.REACT_APP_CLIENT_ID
    const secret = process.env.REACT_APP_CLIENT_SECRET
    const grantTypePassword = process.env.REACT_APP_GRANT_TYPE_PASSWORD
    useEffect(() => {

    }, []);

    const login = async (credentials: { phone: string; password: string }) => {
        const payload = {
            username: credentials.phone,
            password: credentials.password,
            client_id: clientId,
            client_secret: secret,
            grant_type: grantTypePassword
        }

        try {

            LoginService(payload).then(item => {
                const response = item.data.data;
                setUser({
                    id: 1,
                    username: payload.username,
                    type_authentication: response.type_authentication,
                    otp: response.otp
                });
                localStorage.setItem('access_token', response.access_token);
            })
            return {success: true};
        } catch (error) {
            return {success: false, error: 'Đăng nhập thất bại'};
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
        message.success('Đã đăng xuất thành công');
    };

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};