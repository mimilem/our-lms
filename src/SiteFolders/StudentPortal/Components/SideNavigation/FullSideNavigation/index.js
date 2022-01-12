/*
    The full navigation component with all 
    information when the side navigation is 
    not toggled.

    This component inherits and uses classNames
    and stylings from the SideNavigation index files

*/

import React from 'react';

import { Link } from 'react-router-dom';

//import the styling compnent(s).
import './fullSideNavigation.css';

import ToggledSideNavigation from '../ToggledSideNavigation';


function FullSideNavigation(props) {

    const { toggledBar, setToggledBar, activeTab } = props;

    // Change the initiale state for when the toggle 
    // button is clicked on. 
    const handleToggledBar = () => setToggledBar(!toggledBar)

    return (
        toggledBar === false ?
            <div className="full-side-navigation-container">
                
                <Link to='/Students/Dashboard' 
                    className={activeTab === 'dashboard' ? 'active' : ''} 
                >
                    <div className='dashboard-icon'/>
                    <div className='side-navigation-text'>Dashboard</div>
                </Link>

                <Link to='/Students/Modules'
                    className={activeTab === 'myCourses' ? 'active' : ''} 
                >
                        <div className='classes-icon'/>
                        <div className='side-navigation-text'>My Courses</div>
                </Link>
                
                <Link to='/Students/MyWork' 
                    className={activeTab === 'myWork' ? 'active' : ''} 
                >
                        <div className='myWork-icon'/>
                        <div className='side-navigation-text'>My Work</div>
                </Link>

                <Link to='/Students/Time-Table'
                    className={activeTab === 'timeTable' ? 'active' : ''} 
                >
                    <div className='time-table-icon'/>
                    <div className='side-navigation-text'>Time Table</div>
                </Link>

                <Link to='/Students/Media'
                    className={activeTab === 'media' ? 'active' : ''} 
                >
                    <div className='events-icon'/>
                    <div className='side-navigation-text'>Media</div>
                </Link>

                <Link to='/Students/Reports'
                    className={activeTab === 'reports' ? 'active' : ''} 
                >
                    <div className='reports-icon'/>    
                    <div className='side-navigation-text'>Reports</div>
                </Link>

                <Link to='/' className='logout-container'>
                    <div className='logout-icon'/>
                    <div className='side-navigation-text'>Sign Out</div>
                </Link> 

                <div 
                    onClick={handleToggledBar}
                    className='toggle-icon'
                    title='Show less information' 
                />
            </div>
            
            : 
            
            <ToggledSideNavigation 
                toggledBar={toggledBar} 
                setToggledBar={setToggledBar}
                activeTab={activeTab}/>
    );
}

export default FullSideNavigation;
