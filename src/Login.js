import React from 'react'
import { useNavigate } from 'react-router-dom'



function Login() {

    const navigate = useNavigate();

    function handleClick(){
        console.log("Fazer Login")
        navigate('/')
    }


    return (
        <div>
            <h1>Pagina de Login</h1>
            <button onClick={handleClick}>Login</button>
        </div>
    )
}

export default Login
