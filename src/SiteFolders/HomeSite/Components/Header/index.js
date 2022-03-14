/*
    Here we organize and style the elements of the header 
    and Navigation Tab.
*/
import React, {useState, useEffect} from 'react';

//import the components to be displayed in header. 
import BackgroundAnimation from '../BackgroundAnimation';
import NavigationTab from '../NavigationTab';
import HomeIntroSection from '../HomeIntroSection';
//import styling
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