import React from 'react';
import { Link } from 'react-router-dom';
import './sideNavigation.css';

function SideNavigation() {
    return (
        <div className="side-navigation-container">
            <a className='active' >
                <div className='dashboard-icon'/>
                <div className='side-navigation-text'>Dashboard</div>
            </a>

            <a href="#services" >
                <div className='lecture-icon'/>
                <div className='side-navigation-text'>Classes</div>
            </a>

            <a href="#clients" >
                <div className='modules-icon'/>
                <div className='side-navigation-text'>Module Shelf</div>
            </a>

            <a href="#services" >
                <div className='students-icon'/>
                <div className='side-navigation-text'>Students</div>
            </a>

            <a href="#contact" >
                <div className='exam-icon'/>
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
                <div className='report-icon'/>    
                <div className='side-navigation-text'>Reports</div>
            </a>

            <Link to='/' className='log-out'>
                <div className='logout-icon'/>
                <div className='side-navigation-text'>Log Out</div>
            </Link>
        </div>
    );
}

export default SideNavigation;