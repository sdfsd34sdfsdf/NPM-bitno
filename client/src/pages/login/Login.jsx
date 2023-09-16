import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import AuthService from "../../services/auth-servis";

function Login() {

    const [state, setState] = useState({ name: "" });

    const onLogin = () => {
        AuthService.login(state)
            .then(res => {
                console.log(res.data);
                AuthService.storeUserData(res.data)
            })
    }

    return (
        <div>
            Login: <input type="text"
                onChange={event => setState({ ...state, name: event.target.value })} />
            <button onClick={onLogin}>Login</button>
        </div>
    )
}

export default Login;