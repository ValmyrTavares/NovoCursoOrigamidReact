import React from 'react'
import './Header.css'
import {NavLink, useLocation} from 'react-router-dom'

function Header() {
    const location = useLocation()

    React.useEffect(()=>{
        console.log("Mudou a rota")
    },[location])

    return (
        <nav>
           <NavLink to="/" end> Home</NavLink> | 
           <NavLink to="/sobre"> Sobre</NavLink> |
           <NavLink to="login"> Login</NavLink>
            <p>Esse é o Header</p>
        </nav>
    )
}

export default Header
