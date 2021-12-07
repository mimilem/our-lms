import React from 'react';
import './header.css'

function Header() {

    return (
        <header className='container'>
            <div className='logoContainer'>
                <div className='logo'/>
            </div>

            <div className='loginInputContainer'>
                Staff login: 
                <input
                    placeholder="Username"
                    style={{width: 115, height:20, marginLeft:15, borderRadius: 10, borderWidth:0}}
                />
                <input
                    placeholder="Password"
                    style={{width: 115, height:20, marginLeft:15, borderRadius: 10, borderWidth:0}}
                />
                <button style={{width: 115, height:25, marginLeft:15,borderWidth:1, backgroundColor:'#5D8AA8', color:'#fff'}}>
                    Login
                </button>
            </div>

            <div className="navContainer">
                <ul className="tabElementsContainer">
                    <li className="tabElement">Home</li>
                    <li className="tabElement">Courses</li>
                    <li className="tabElement">About Us</li>
                    <li className="tabElement">Contact Us</li>
                    <li className="tabElement">Register</li>
                    <li className="tabElement">Student Portal</li>
                </ul>
            </div>
        </header>
    );
}

export default Header;