/*
    Here we organize and style the elements of the header 
    and Navigation Tab.
*/
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import BackgroundAnimation from '../BackgroundAnimation';
import NavigationTab from '../NavigationTab';
import HomeIntroSection from '../HomeIntroSection';
import './header.css';


function Header() {

    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }
    useEffect(() => {
    const changeWidth = () => {
        setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)
    return () => {
        window.removeEventListener('resize', changeWidth)
    }
    }, [])

    return (
        <div className='container'>
            
            <BackgroundAnimation />

            {(
            toggleMenu || screenWidth > 709) && (
                <>
                    {/* Staff Login Form */}
                    <div className='loginInputContainer'>
                        Staff login: 
                        <input 
                            placeholder="Username"
                            type='email'    
                        />
                        <input 
                            placeholder="Password"
                            type='password'    
                        />
                        <button>Login</button>
                    </div>
                    {/* Navigation Bar */}
                    <NavigationTab />
                </>
            )}
            <div>
                <HomeIntroSection />    
            </div>
            <button onClick={toggleNav} className="btn">Open</button>
        </div>
    );
}

export default Header;