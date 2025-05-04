import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {ConfigProvider} from 'antd';
import vi_VN from 'antd/locale/vi_VN';
import 'dayjs/locale/vi';
import 'antd/dist/reset.css';
import PublicRoute from "./config/route/PublicRoute";
import PrivateRoute from "./config/route/PrivateRoute";
import {AuthProvider} from './provider/AuthProvider';
import MainLayout from "./components/layout/MainLayout";
import GlobalLoader from "./config/axios/GlobalLoader";
import {useAppTheme} from "./hooks/useAppTheme";
import {darkTheme, lightTheme} from "./components/common/theme/ThemeContext";

const Login = lazy(() => import('./components/auth/Login'));
const Dashboard = lazy(() => import('./components/Dashboard'));
const Profile = lazy(() => import('./components/Profile'));
const NotFound = lazy(() => import('./components/common/errors/NotFound'));

function App() {
    const {isDarkMode} = useAppTheme();

    return (
        <ConfigProvider locale={vi_VN} theme={isDarkMode ? darkTheme : lightTheme}>
            <GlobalLoader/>
            <AuthProvider>
                <Router>
                    <Suspense>
                        <Routes>
                            <Route element={<PublicRoute/>}>
                                <Route path="/login" element={<Login/>}/>
                            </Route>

                            {/* Private routes */}
                            <Route element={<PrivateRoute/>}>
                                <Route element={<MainLayout/>}>
                                    <Route path="/" element={<Dashboard/>}/>
                                    <Route path="/profile" element={<Profile/>}/>
                                </Route>
                            </Route>

                            {/* 404 */}
                            <Route path="*" element={<NotFound/>}/>
                        </Routes>
                    </Suspense>
                </Router>
            </AuthProvider>
        </ConfigProvider>
    );
}

export default App;