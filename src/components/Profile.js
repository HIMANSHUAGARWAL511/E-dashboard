import React from 'react'

const Profile = () => {
    let data = JSON.parse(localStorage.getItem('user'));
    let name = data.name;
    let email = data.email
    console.log(name)
    console.log(email)
    return (
        <div ><h1 style={{ marginLeft: "45%", marginBottom: "3rem" }}>User Details</h1>
            <div style={{ marginLeft: "5%", fontSize: "1.5rem", marginBottom: "0.5rem" }}><h2>Hello, {name}</h2></div><div style={{ marginLeft: "9%", fontSize: "1rem" }}><h3>  {email}</h3>

            </div>
        </div>
    )
}

export default Profile