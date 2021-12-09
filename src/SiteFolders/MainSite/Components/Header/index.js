/*
    Here we organize and style the elements of the header 
    and Navigation Tab.
*/
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import BackgroundAnimation from '../BackgroundAnimation';
import NavigationTab from '../NavigationTab';
import Presentation from '../Presentation';
import './header.css';


function Header() {

    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [activeTab, setActiveTab] = useState("tab1");
    
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

    const handleTab1 = () => {
        // update the state to tab1
        setActiveTab("tab1");
      };
    const handleTab2 = () => {
        // update the state to tab2
        setActiveTab("tab2");
    };

    return (
        <div className='container'>
            
            <BackgroundAnimation />

            <div className='logoContainer'>
                <div className='logo'/>
            </div>

            {(
            toggleMenu || screenWidth > 709) && (
                <>

                    {/* Staff Login Form */}
                    <div className='loginInputContainer'>
                        Staff login: 
                        <input placeholder="Username"/>
                        <input placeholder="Password"/>
                        <button>Login</button>
                    </div>

                    {/* Navigation Bar */}
                    <NavigationTab />
                </>
            )}
            <div>
                <Presentation />    
            </div>
            <button onClick={toggleNav} className="btn">Open</button>
        </div>
    );
}

export default Header;