import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import './navigationTab.css'


function NavigationTab() {
    
    const [activeTab, setActiveTab] = useState("tab1");

    return (
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
                    <li 
                        className={activeTab === 'tab2' ? 'activeTabElement' : "tabElement" }
                        onClick={() => setActiveTab("tab2")}
                    >
                        Courses
                    </li>
                </Link>
                <Link to='/'>
                    <li 
                        className={activeTab === 'tab3' ? 'activeTabElement' : "tabElement" }
                        onClick={() => setActiveTab("tab3")}
                    >
                        About
                    </li>
                </Link>
                <Link to='/' >
                    <li 
                        className={activeTab === 'tab4' ? 'activeTabElement' : "tabElement" }
                        onClick={() => setActiveTab("tab4")}
                    >
                        Register
                    </li>
                </Link>
                <Link to='/'>
                    <li 
                        className={activeTab === 'tab5' ? 'activeTabElement' : "tabElement" }
                        onClick={() => setActiveTab("tab5")}
                    >
                        Get In Touch
                    </li>
                </Link>
                <Link  to='/'>
                    <li className="StudentPortailTabElement">Student Portal</li>
                </Link>
            </ul>   
        </div>
    );
}

export default NavigationTab;