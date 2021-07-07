import React,{useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import './Login.css'

const Login = () =>{
    const  history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const LoginUser = () =>{
        fetch("/login",{
            method: "post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.Error) {
                document.getElementById("login-error").style.display = "block"
                document.getElementById("login-error").innerHTML = data.Error
                document.getElementById("login-error").style.color = "red"
            } else {
                history.push('/home')
            }
        }).catch(err=>{
            console.log(err)
        })
    }
    return(
    <div className="wrapper">
        <div className="login-container">
            <h1 className="brand-name">Instagram</h1>
            <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            <h6 id="login-error"> error message </h6>
            <button onClick={()=>LoginUser()}>Log In</button>
            <p><Link to="./signup" style={{ color: 'inherit', textDecoration: 'inherit'}}>Don't have an account? Sign up</Link></p>
        </div>
    </div>
    )
}

export default Login