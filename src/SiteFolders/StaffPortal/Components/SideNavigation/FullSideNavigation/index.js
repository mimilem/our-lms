/*
    The full navigation component with all 
    information when the side navigation is 
    not toggled.

    This component inherits and uses classNames
    and stylings from the SideNavigation index files

*/

import React, {useState} from 'react';

import { Link } from 'react-router-dom';

import './fullSideNavigation.css';
import ToggledSideNavigation from '../ToggledSideNavigation';


function FullSideNavigation() {

    // Initiate a boolean state to check weither 
    // the bar is toggled.
    const [toggledBar, setToggled] = useState(false);

    // Change the initiale state for when the toggle 
    // button is clicked on. 
    const handleToggledBar = () => {
        setToggled(true)
    }

    return (
        <>
            {toggledBar === false ?

            <div className="full-side-navigation-container">
                
                <a href="#services" className='active'>
                    <div className='dashboard-icon'/>
                    <div className='side-navigation-text'>Dashboard</div>
                </a>

                <a href="#services" >
                    <div className='classes-icon'/>
                    <div className='side-navigation-text'>Classes</div>
                </a>

                <a href="#clients" >
                    <div className='module-icon'/>
                    <div className='side-navigation-text'>Module Shelf</div>
                </a>

                <a href="#services" >
                    <div className='students-icon'/>
                    <div className='side-navigation-text'>Students</div>
                </a>

                <a href="#contact" >
                    <div className='exams-icon'/>
                    <div className='side-navigation-text'>Exams</div>
                </a>

                <a href="#contact" >
                    <div className='time-table-icon'/>
                    <div className='side-navigation-text'>Time Table</div>
                </a>

                <a href="#contact" >
                    <div className='events-icon'/>
                    <div className='side-navigation-text'>Events</div>
                </a>

                <a href="#contact" >
                    <div className='reports-icon'/>    
                    <div className='side-navigation-text'>Reports</div>
                </a>

                <Link to='/' className='logout-container'>
                    <div className='logout-icon'/>
                    <div className='side-navigation-text'>Log Out</div>
                </Link>
                
                <div 
                    onClick={handleToggledBar}
                    className='toggle-icon'
                    title='Show less information' />
            </div>

            : 
            
            <ToggledSideNavigation />
            }
        </>
    );
}

export default FullSideNavigation;