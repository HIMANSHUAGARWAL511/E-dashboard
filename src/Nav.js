import React from 'react'
import "./nav.css"
import { Link, useNavigate } from 'react-router-dom'
const Nav = () => {
    let auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup')
    }
    return (
        <div>
            <ul >{
                auth ? <ul className='nav-ul'><li className='nav-li'><Link to="/">Products</Link></li>
                    <li className='nav-li'><Link to="/add">Add Product</Link></li>
                    <li className='nav-li'><Link to="/profile">Profile</Link></li>
                    <li className='nav-li'><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li></ul> : <><ul className="nav-right"><li className='nav-li'><Link to="/signup">Sign Up</Link></li> <li className='nav-li'><Link to="/login">Log in</Link></li></ul></>
            }
            </ul>
        </div>
    )
}

export default Nav