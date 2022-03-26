/*

    The tab navigation of the home site.
    
    It allows to navigate through the pages of the home site
    and links to the other sites via the login forms. 


*/

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//import styling
import './navigationTab.css'


function NavigationTab() {

    const baseS3URL = 'https://vincolibrarys3100304-dev.s3.amazonaws.com/academicFeesFolder/Richfield-Pricing-Booklet.pdf'

    // navigation Tab dropdown states.
    const [isShown1, setIsShown1] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    const [isShown3, setIsShown3] = useState(false);
    
    //declare the initial state of the active tab element.
    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <div className='navigation-container'>
            
            <div className='home-site-logo-container'>
                <div className='home-site-logo'/>
            </div>

            {/* Tab navigation list and dropdown menus */}
            <div className="tab-list-container">
                <ul>
                    <Link to='/'>
                        <li
                            className={activeTab === 'tab1' ? 'active-tab-element' : "tab-element"}
                            onClick={() => setActiveTab("tab1")} >
                            Home
                        </li>
                    </Link>
                    <Link to='/campuses'>
                        <li
                            className={activeTab === 'tab2' ? 'active-tab-element' : "tab-element"}
                            onClick={() => setActiveTab("tab2")} >
                            Campuses
                        </li>
                    </Link>

                    <div className='dropdown'
                        onMouseEnter={() => setIsShown1(true)}
                        onMouseLeave={() => setIsShown1(false)} > 
                        <li 
                            className={activeTab === 'tab3' ? 'active-tab-element' : "tab-element" }
                            onClick={() => setActiveTab("tab3")} >
                            Admission
                        </li>
                        {isShown1 && (
                        <ul className='dropdown-menu'>

                            <Link to='/Apply-signUp'>
                                <li>Apply</li>
                            </Link>
                            
                            <hr className='nav-tab-hr'/>
                            <li>International student</li>
                            <hr className='nav-tab-hr'/>
                            <li>
                                <a href={baseS3URL} target='_blank' rel='noreferrer'>Tuition fees</a>
                            </li>
                        </ul> 
                        )}
                    </div>
                    
                    <div className='dropdown'
                        onMouseEnter={() => setIsShown2(true)}
                        onMouseLeave={() => setIsShown2(false)} > 
                        <li 
                            className={activeTab === 'tab4' ? 'active-tab-element' : "tab-element" }
                            onClick={() => setActiveTab("tab4")} >
                            About
                        </li>
                        {isShown2 && (
                        <ul className='dropdown-menu'>
                            <li>About us</li>
                            <hr className='nav-tab-hr'/>
                            <li>Media</li>
                            <hr className='nav-tab-hr'/>
                            <li>Campus life</li>
                            <hr className='nav-tab-hr'/>
                            <li>Governance</li>
                        </ul> 
                        )}
                    </div>

                    <Link to='/contact'>
                        <li 
                            className={activeTab === 'tab5' ? 'active-tab-element' : "tab-element" }
                            onClick={() => setActiveTab("tab5")} >
                            Get In Touch
                        </li>
                    </Link>

                    <div className='dropdown'
                        onMouseEnter={() => setIsShown3(true)}
                        onMouseLeave={() => setIsShown3(false)} >
                        <li className="student-portail-tab-element" >
                            Login
                        </li>
                        {isShown3 && (
                            <ul className='dropdown-menu' style={{marginTop: '0.2rem'}}>
                                <Link to='/Staff-login'>
                                    <li>Staff</li>
                                </Link>
                                <hr className='nav-tab-hr'/>
                                <Link to='/student-login'>
                                    <li>Student</li>
                                </Link>
                            </ul> 
                        )}
                    </div>
                </ul>   
            </div>
        </div>
    );
}

export default NavigationTab;