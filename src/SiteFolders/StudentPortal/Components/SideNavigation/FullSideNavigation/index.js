/*
    The full navigation component with all 
    information when the side navigation is 
    not toggled.

    This component inherits and uses classNames
    and stylings from the SideNavigation index files

*/

import React, {useEffect, useState} from 'react';

import { Link } from 'react-router-dom';

import './fullSideNavigation.css';
import ToggledSideNavigation from '../ToggledSideNavigation';


function FullSideNavigation(props) {

    const { toggledBar, setToggledBar } = props;

    const [activeTab, setActiveTab] = useState('dashboard')

    // Change the initiale state for when the toggle 
    // button is clicked on. 
    const handleToggledBar = () => {
        setToggledBar(true)
    }

    const handleDashboard = () => {
        setActiveTab('dashboard')
    }
    const handleClasses = () => {
        setActiveTab('classes')
    }

    return (
        toggledBar === false ?
            <div className="full-side-navigation-container">
                
                <Link to='/Students/Dashboard' 
                    onClick={handleDashboard} 
                    className={activeTab === 'dashboard' ? 'active' : ''} 
                >
                    <div className='dashboard-icon'/>
                    <div className='side-navigation-text'>Dashboard</div>
                </Link>

                <Link to='/Students/Modules'
                    onClick={handleClasses} 
                    className={activeTab === 'classes' ? 'active' : ''} 
                >
                        <div className='classes-icon'/>
                        <div className='side-navigation-text'>Modules</div>
                </Link>

                <Link to='/Students/Modules-Shelf'>
                    <div className='module-icon'/>
                    <div className='side-navigation-text'>Module Shelf</div>
                </Link>

                <Link to='/Staff/Exams'>
                    <div className='exams-icon'/>
                    <div className='side-navigation-text'>Exams</div>
                </Link>

                <Link to='/Students/Time-Table'>
                    <div className='time-table-icon'/>
                    <div className='side-navigation-text'>Time Table</div>
                </Link>

                <Link to='/Students/Events'>
                    <div className='events-icon'/>
                    <div className='side-navigation-text'>Media</div>
                </Link>

                <Link to='/Staff/Reports'>
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
                setToggledBar={setToggledBar}/>
    );
}

export default FullSideNavigation;
