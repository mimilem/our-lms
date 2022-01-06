/*
    The header container of the staff portail.
*/

import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDetectClickOutside } from 'react-detect-click-outside';

import './header.css';


function Header() {
    
    const [isShown, setIsShown] = useState(false);

    const closeDropdown = () => {
        setIsShown(false);
    }

    const ref = useDetectClickOutside({ onTriggered: closeDropdown });

    // Initiate the window size.
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    // On Screen size change, update the initiale Screen size state.
    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

    return (
        <div className="students-header-container">

            <div className='students-header-logo-container'>
                <div className='students-header-logo'/>
            </div>
            
            <div className='institution-name'>
                Vinco-eLearning - Braamfontein Campus
            </div>

            {/* DON'T TOUCH */}

            {/* <div className='path-container'>
                {(screenWidth > 700) && (
                    <div className='path'>
                        Staff / Dashboard
                    </div>
                )}
            </div> */}

                <div onClick={() => setIsShown(true)} ref={ref} >

                        <div className='user-settings'>
                            <div className='user-avatar' />
                        </div>
                        
                        {isShown && (
                            <ul className='profile-dropdown-menu'>
                                <li>Profile</li>
                                <hr className='nav-tab-hr'/>
                                <li>Settings</li>
                                <hr className='nav-tab-hr'/>
                                <Link to='/' className='sign-out'>Sign out</Link>
                            </ul> 
                        )}
                
                </div>
        </div>
    );
}

export default Header;