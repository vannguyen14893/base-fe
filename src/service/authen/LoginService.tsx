import http from "../../config/axios/AxiosConfig";
import {LoginRequest} from "../../dto/LoginRequest";

function LoginService(payload: LoginRequest) {
    return http.post("/custom/token", payload);
}

export default LoginService;