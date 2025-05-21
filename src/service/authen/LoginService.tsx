import {LoginRequest} from "../../dto/LoginRequest";
import data from '../../json/login-data.json';

async function LoginService(payload: LoginRequest) {
    try {
        return {data};
    } catch (error) {
        throw new Error('Failed to fetch login data');
    }
}
export default LoginService;