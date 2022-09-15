import React, { useState } from "react";
import './signup.css'
import './navbar.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const SignIn = () => {

    const navigate = useNavigate;
    
    const[user, setUser]=useState({
        name:"",
        email:"",
        password:""
    })

    const handleChange = e =>{
        const{name,value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }
const signup =() =>{
  const { name, email, password } = user
  if(name && email && password){
    axios.post("http://localhost:8000/signup", user)
    .then(()=>{console.log('user')}).catch(()=>{
        alert('wrong')
    })

    
  } else{
    alert("invalid Input")
  }

  
  
}


    return(
        <div className="signin">
            <div className="navbar1">
            <div className="heading1">freeCodeCamp</div>
            </div>
            <div className="padd"> </div>
            <div className="button">Continue with Google</div>
            <input type="Text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input>
            <input type="Text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange}></input>
            <div className="button"  onClick={signup}>Sign in with Email</div>
            <div className="terms">freeCodeCamp is free and your account is private by default. We use your email address to store your curriculum progress. By continuing, you indicate that you have read and agree to freeCodeCamp.org's <u>Terms of Service</u> and <u>Privacy Policy</u>.</div>
        </div>
    );
}

export default SignIn;