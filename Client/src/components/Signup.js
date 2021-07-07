import React,{useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import './Signup.css'

const Signup = () =>{
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const RegisterUser = () =>{
        fetch("/signup",{
            method: "post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                email,
                password
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.Error) {
                document.getElementById("signup-error").style.display = "block"
                document.getElementById("signup-error").innerHTML = data.Error
                document.getElementById("signup-error").style.color = "red"
            } else {
                document.getElementById("signup-error").style.display = "block"
                document.getElementById("signup-error").style.color = "rgb(27, 226, 37)"
                document.getElementById("signup-error").innerHTML = data.Message
            }
        }).catch(err=>{
            console.log(err)
        })
    }
    return(
        <div className="wrapper">
        <div className="signup-container">
        <h1 className="brand-name">Instagram</h1>
            <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}></input>
            <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            <h6 id="signup-error"> error message </h6>
            <button onClick={()=>RegisterUser()}>Sign Up</button>
            <p><Link to="./" style={{ color: 'inherit', textDecoration: 'inherit'}}>Have an account? Log in</Link></p>
        </div>
    </div>
    )
}

export default Signup