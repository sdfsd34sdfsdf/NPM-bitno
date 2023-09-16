import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth-servis";

function Register() {

    const [state, setState] = useState({ name: "" });
    const navigateTo = useNavigate();

    const onRegister = () => {
        AuthService.register(state)
            .then(res => {
                if (res.data == "Ok") {
                    navigateTo('/')
                } else {
                    navigateTo('/register')
                }
            })
    }

    return (
        <div>
            Register: <input type="text"
                onChange={event => setState({ ...state, name: event.target.value })} />
            <button onClick={onRegister}>Register</button>
        </div>
    )
}

export default Register;