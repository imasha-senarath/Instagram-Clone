import React from 'react'
import './Login.css'

const Login = () =>{
    return(
    <div className="wrapper">
        <div className="login-container">
            <img src="https://i0.wp.com/www.dafontfree.io/wp-content/uploads/2020/12/instagram-new.png?resize=1100%2C750&ssl=1"></img>
            <input type="text" placeholder="Email"></input>
            <input type="password" placeholder="Password"></input>
            <button>Log in</button>
        </div>
    </div>
    )
}

export default Login