import {Navigate, Outlet} from 'react-router-dom';
import {useAuth} from "../../provider/AuthProvider";

export default function PrivateRoute() {
    const {user} = useAuth();
    const accessToken = localStorage.getItem('access_token');
    return accessToken ? <Outlet/> : <Navigate to="/login" replace/>;
}