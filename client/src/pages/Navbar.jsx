import React from "react";
import axios from "axios";
import { useEffect } from "react";

function Login() {

    useEffect(() => {
        axios.get('/data')
            .then(res => {
                console.log(res.data)
            })
    }, [])

    return (
        <div>
            NavBar
        </div>
    )
}

export default Login;