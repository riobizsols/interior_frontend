import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <div className="nav">
    <div className="logo">
        I W D<br /><span>Interior Web Design</span>
    </div>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to="#">Interior Customization</Link></li>
            <li><Link to="/assets">Assets</Link></li>
            <li><Link to="#">Project</Link></li>
            <li><Link to="#">Contact</Link></li>
            <li><Link to="#">Blog</Link></li>
        </ul>
        <div className="btn">
        <Link to=''>
        <button className="sign">Sign Up</button></Link>
        <Link to=''>
        <button className="login">Login</button></Link>
        </div>
</div>
</div>
  )
}

export default Navbar