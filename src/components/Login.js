import React, { useEffect, useState } from 'react'
import "./Component.css"
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [email, setUser] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        let auth = localStorage.getItem('user');
        if (auth) {
            Navigate('/');
        }
    })
    const Navigate = useNavigate();
    const collect = async () => {
        console.log(email, password);
        let result = await fetch('http://localhost:5000/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.log(result);
        if (result.name) {
            localStorage.setItem('user', JSON.stringify(result));
            Navigate('/')
        } else {
            alert("please enter correct email")
        }
    }
    return (<div className='product'>
        <div><h1>Login</h1></div>
        <input className="inputBox" type="text" value={email} onChange={(e) => { setUser(e.target.value) }} name="username" placeholder='Enter Email Name' id="" />
        <input className="inputBox" value={password} type="password" name="password" onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter password' id="" />

        <button id="" onClick={collect} className="submitBox" type='button'>Log in</button>


    </div>

    )
}

export default Login