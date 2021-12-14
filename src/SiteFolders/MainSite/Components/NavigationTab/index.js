import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import './navigationTab.css'


function NavigationTab() {
    
    const [activeTab, setActiveTab] = useState("tab1");
    
    return (
        <div className='nav-Container'>

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

            <div className='logoContainer'>
                <div className='logo'/>
            </div>

            <div className="navContainer">
                <ul className="tabElementsContainer">
                    <Link to='/'>
                        <li
                            className={activeTab === 'tab1' ? 'activeTabElement' : "tabElement" }
                            onClick={() => setActiveTab("tab1")} 
                            >
                            Home
                        </li>
                    </Link>
                    <Link to='/'>
                        <div className='dropdown'> 
                            <li 
                                className={activeTab === 'tab2' ? 'activeTabElement' : "tabElement" }
                                onClick={() => setActiveTab("tab2")}
                            >
                                Courses
                            </li>
                            <div className='dropdown-menu'>
                                <div>Full-Time</div>
                                <hr/>
                                <div>Flexi-Learning</div>
                                <hr/>
                                <div>Hybrid-Learning</div>
                            </div> 
                        </div>
                    </Link>
                    <Link to='/'>
                        <div className='dropdown'> 
                            <li 
                                className={activeTab === 'tab3' ? 'activeTabElement' : "tabElement" }
                                onClick={() => setActiveTab("tab3")}
                            >
                                Admission
                            </li>
                            <div className='dropdown-menu'>
                                <div>Apply</div>
                                <hr/>
                                <div>International student</div>
                                <hr/>
                                <div>Tuition fees</div>
                            </div> 
                        </div>
                    </Link>
                        <div className='dropdown'> 
                            <li 
                                className={activeTab === 'tab4' ? 'activeTabElement' : "tabElement" }
                                onClick={() => setActiveTab("tab4")}
                            >
                                About
                            </li>
                            <div className='dropdown-menu'>
                                <a href='#'>About us</a>
                                <hr/>
                                <a href='#'>Media</a>
                                <hr/>
                                <a href='#'>Campus life</a>
                                <hr/>
                                <a href='#'>Governance</a>
                            </div> 
                        </div>
                    <Link to='/contact'>
                        <li 
                            className={activeTab === 'tab5' ? 'activeTabElement' : "tabElement" }
                            onClick={() => setActiveTab("tab5")}
                        >
                            Get In Touch
                        </li>
                    </Link>
                    <Link  to='/student-login'>
                        <li className="StudentPortailTabElement">Student Portal</li>
                    </Link>
                </ul>   
            </div>
        </div>
    );
}

export default NavigationTab;