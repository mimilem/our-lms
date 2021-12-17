/*

    The tab navigation of the home site.
    
    It allows to navigate through the pages of the home site
    and links to the other sites via the login forms. 


*/

import React, {useState} from 'react';
import { Link } from 'react-router-dom';

//import styling
import './navigationTab.css'


function NavigationTab() {
    
    //declare the initial state of the active tab element.
    const [activeTab, setActiveTab] = useState("tab1");
    
    return (
        <div className='navigation-container'>
            
            <div className='home-site-logo-container'>
                <div className='home-site-logo'/>
            </div>

            {/* Staff Login Form */}
            <div className='staff-login-form-container'>
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

            {/* Tab navigation list and dropdown menus */}
            <div className="tab-list-container">
                <ul>
                    <Link to='/'>
                        <li
                            className={activeTab === 'tab1' ? 'active-tab-element' : "tab-element"}
                            onClick={() => setActiveTab("tab1")} 
                        >
                            Home
                        </li>
                    </Link>

                    <div className='dropdown'> 
                        <li 
                            className={activeTab === 'tab2' ? 'active-tab-element' : "tab-element" }
                            onClick={() => setActiveTab("tab2")}
                        >
                            Courses
                        </li>
                        <ul className='dropdown-menu'>
                            <li>Full-Time</li>
                            <hr/>
                            <li>Flexi-Learning</li>
                            <hr/>
                            <li>Hybrid-Learning</li>
                        </ul> 
                    </div>

                    <div className='dropdown'> 
                        <li 
                            className={activeTab === 'tab3' ? 'active-tab-element' : "tab-element" }
                            onClick={() => setActiveTab("tab3")}
                        >
                            Admission
                        </li>
                        <ul className='dropdown-menu'>
                            <li>Apply</li>
                            <hr/>
                            <li>International student</li>
                            <hr/>
                            <li>Tuition fees</li>
                        </ul> 
                    </div>
                    
                    <div className='dropdown'> 
                        <li 
                            className={activeTab === 'tab4' ? 'active-tab-element' : "tab-element" }
                            onClick={() => setActiveTab("tab4")}
                        >
                            About
                        </li>
                        <ul className='dropdown-menu'>
                            <li>About us</li>
                            <hr/>
                            <li>Media</li>
                            <hr/>
                            <li>Campus life</li>
                            <hr/>
                            <li>Governance</li>
                        </ul> 
                    </div>

                    <Link to='/contact'>
                        <li 
                            className={activeTab === 'tab5' ? 'active-tab-element' : "tab-element" }
                            onClick={() => setActiveTab("tab5")}
                        >
                            Get In Touch
                        </li>
                    </Link>

                    <Link  to='/student-login'>
                        <li className="student-portail-tab-element">Student Portal</li>
                    </Link>
                </ul>   
            </div>
        </div>
    );
}

export default NavigationTab;