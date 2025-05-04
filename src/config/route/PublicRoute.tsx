import {Navigate, Outlet} from 'react-router-dom';
import {useAuth} from "../../provider/AuthProvider";

export default function PublicRoute() {
    const {user} = useAuth();
    return !user ? <Outlet/> : <Navigate to="/" replace/>;
}