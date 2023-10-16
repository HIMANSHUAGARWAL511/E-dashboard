import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
function SignUp() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        let auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    })
    const collect = (async () => {
        console.log(name, password, email);
        let result = await fetch("http://localhost:5000/register", {
            method: "post",
            body: JSON.stringify({ name, email, password }),
            headers: {
                'content-Type': "application/json"
            }
        })
        result = await result.json();
        console.log(result);

        navigate('/');
        localStorage.setItem('user', JSON.stringify(result));
    })
    return (
        <div className='product'>
            <h1 className='register'>Register</h1>
            <input className="inputBox" type="text" value={name} onChange={(e) => { setName(e.target.value) }} name="name" placeholder='Enter Name' id="" />
            <input className="inputBox" value={password} type="text" name="password" onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter password' id="" />
            <input className="inputBox" value={email} type="text" onChange={(e) => {
                setEmail(e.target.value)
            }} name="Email" placeholder='Enter Email' id="" />
            <button id="" onClick={collect} className="submitBox" type='button'>Sign Up</button>
        </div>
    )
}

export default SignUp