/*
    Here we organize and style the elements of the header 
    and Navigation Tab.
*/
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import BackgroundAnimation from '../BackgroundAnimation';
import Presentation from '../Presentation';
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
                    <div className="navContainer">
                        <ul className="tabElementsContainer">
                            <Link to='/'>
                                <li className="tabElement">Home</li>
                            </Link>
                            <Link to='/'>
                                <li className="tabElement">Courses</li>
                            </Link>
                            <Link to='/'>
                                <li className="tabElement">About</li>
                            </Link>
                            <Link to='/' >
                                <li className="tabElement">Register</li>
                            </Link>
                            <Link to='/'>
                                <li className="tabElement">Get In Touch</li>
                            </Link>
                            <Link  to='/'>
                                <li className="StudentPortailTabElement">Student Portal</li>
                            </Link>
                        </ul>                    
                    
                    </div>
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