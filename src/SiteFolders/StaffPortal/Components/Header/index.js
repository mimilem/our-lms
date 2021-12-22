/*
    The header container of the staff portail.
*/

import React, {useState, useEffect} from 'react';

import './header.css';


function Header() {

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
        <div className="staff-header-container">

            <div className='staff-header-logo-container'>
                <div className='staff-header-logo'/>
            </div>
            
            <div className='institution-name'>
                Vinco-eLearning
            </div>

            {/* DON'T TOUCH */}

            {/* <div className='path-container'>
                {(screenWidth > 700) && (
                    <div className='path'>
                        Staff / Dashboard
                    </div>
                )}
            </div> */}

            <div className='user-settings'>
                <div className='user-avatar' />
            </div>
        </div>
    );
}

export default Header;