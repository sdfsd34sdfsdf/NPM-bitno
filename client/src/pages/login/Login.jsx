import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth-servis";
import {setUser} from "./store/actions"

function Login() {

    const [state, setState] = useState({ name: "" });
    const dispatch = useDispatch();
    const navigateTo = useNavigate();

    const onLogin = () => {
        AuthService.login(state)
            .then(res => {
                console.log(res.data);
                AuthService.storeUserData(res.data);
                dispatch(setUser(res.data))
                navigateTo('/home')
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