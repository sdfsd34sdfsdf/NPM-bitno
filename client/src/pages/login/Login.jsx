import React from "react";
import axios from "axios";
import { useEffect } from "react";

function Login() {

    /*const [state, setState] = useState({ name: "" });

    const onLogin = () => {
        AuthService.register(state)
            .then(res => {
                console.log(res.data)
            })
    }*/

    return (
        <div>
            Login: <input type="text" />
        </div>
    )
}

export default Login;