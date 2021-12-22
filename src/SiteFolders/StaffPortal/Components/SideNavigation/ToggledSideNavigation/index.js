/*
    The toggled navigation component with less 
    information when the side navigation is 
    toggled.

    This component inherits and uses classNames
    and stylings from the SideNavigation index files

*/

import React, {useState} from 'react';

import { Link } from 'react-router-dom';

import './ToggledSideNavigation.css';
import FullSideNavigation from '../FullSideNavigation';


function ToggledSideNavigation() {

    // Initiate a boolean state to check weither 
    // the bar is toggled.
    const [fullBar, setFullBar] = useState(false);

    // Change the initiale state for when the 'Show 
    // Full Bar' button is clicked on.
    const handleFullBar = () => {
        setFullBar(true)
    }

    return (
        <>
            {fullBar === false ?

            <div className="toggled-side-navigation-container">
                
                <a className='active' title='Dashboard'>
                    <div className='dashboard-icon'/>
                </a>

                <a href="#services" title='Classes'>
                    <div className='classes-icon'/>
                </a>

                <a href="#clients" title='Modules'>
                    <div className='module-icon'/>
                </a>

                <a href="#services" title='Students'>
                    <div className='students-icon'/>
                </a>

                <a href="#contact" >
                    <div className='exams-icon' title='Exams'/>
                </a>

                <a href="#contact" >
                    <div className='time-table-icon' title='Time Table'/>
                </a>

                <a href="#contact" title='Events'>
                    <div className='events-icon'/>
                </a>

                <a href="#contact" title='Report'>
                    <div className='reports-icon'/>    
                </a>

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
            
            }
        </>
    );
}

export default ToggledSideNavigation;