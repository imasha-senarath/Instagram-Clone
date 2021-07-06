import React,{useState} from 'react'
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
        })
    }
    return(
        <div className="wrapper">
        <div className="signup-container">
            <img src="https://i0.wp.com/www.dafontfree.io/wp-content/uploads/2020/12/instagram-new.png?resize=1100%2C750&ssl=1"></img>
            <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}></input>
            <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            <p id="signup-error"> error message </p>
            <button onClick={()=>RegisterUser()}>Log in</button>
        </div>
    </div>
    )
}

export default Signup