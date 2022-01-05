/*
    The toggled navigation component with less 
    information when the side navigation is 
    toggled.

    This component inherits and uses classNames
    and stylings from the SideNavigation index files

*/

import React from 'react';

import { Link } from 'react-router-dom';

import './ToggledSideNavigation.css';
import FullSideNavigation from '../FullSideNavigation';


function ToggledSideNavigation({toggledBar, setToggledBar}) {

    // Change the initiale state for when the 'Show 
    // Full Bar' button is clicked on.
    const handleFullBar = () => {
        setToggledBar(false)
    }

    return (
        toggledBar === true ?

            <div className="toggled-side-navigation-container">
                
                <Link to='/Staff/Dashboard' className='active' title='Dashboard'>
                    <div className='dashboard-icon'/>
                </Link>

                <Link to='/Staff/Departments' title='Departments'>
                    <div className='classes-icon'/>
                </Link>

                <Link to='/Staff/Modules-Shelf' title='Modules'>
                    <div className='module-icon'/>
                </Link>

                <Link to='/Staff/Students' title='Students'>
                    <div className='students-icon'/>
                </Link>

                <Link to='/Staff/Exams' >
                    <div className='exams-icon' title='Exams'/>
                </Link>

                <Link to='/Staff/Time-Table' >
                    <div className='time-table-icon' title='Time Table'/>
                </Link>

                <Link to='/Staff/Events' title='Media'>
                    <div className='events-icon'/>
                </Link>

                {/* <Link to='/Staff/Reports' title='Report'>
                    <div className='reports-icon'/>    
                </Link> */}

                <Link to='/' className='logout-container' title='Log-out'>
                    <div className='logout-icon'/>
                </Link>
            
                <div 
                    onClick={handleFullBar} 
                    className='toggled-side-navigation-icon' 
                    title='Show more information' />
            </div>

            : 

            <FullSideNavigation />
    );
}

export default ToggledSideNavigation;