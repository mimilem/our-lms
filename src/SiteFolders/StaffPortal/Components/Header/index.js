import React, {useState, useEffect} from 'react';
import './header.css'


function Header() {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

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
        <div className="staff-header-container">

            <div className='staff-header-logo-container'>
                <div className='staff-header-logo'/>
            </div>
            
            <div className='institution-name'>
                Vinco-eLearning
            </div>

            <div className='path-container'>
                {(screenWidth > 700) && (
                    <div className='path'>
                        Overview / Dashboard
                    </div>
                )}
            </div>

            <div className='user-settings'>
                <div className='user-avatar' />
            </div>
        </div>
    );
}

export default Header;