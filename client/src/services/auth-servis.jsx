import axios from "axios";

class AuthService {
    static register(body) {
        return axios.post('/upis', body)
    }
}

export default AuthService;