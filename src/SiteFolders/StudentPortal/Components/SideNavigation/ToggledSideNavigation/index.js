/*
    The toggled navigation component with less 
    information when the side navigation is 
    toggled.

    This component inherits and uses classNames
    and stylings from the SideNavigation index files

*/

import React from 'react';

import { Link } from 'react-router-dom';

//import the styling compnent(s).
import './ToggledSideNavigation.css';


function ToggledSideNavigation({ toggledBar, setToggledBar, activeTab }) {

    // Change the initiale state for when the 'Show 
    // Full Bar' button is clicked on.
    const handleFullBar = () => {
        setToggledBar(false)
    }

    return (

            <div className="toggled-side-navigation-container">
                
                <Link to={{     
                        pathname:'/Students/Dashboard'
                    }}
                    title='Dashboard' 
                    className={activeTab === 'dashboard' ? 'active' : ''}
                >
                    <div className='dashboard-icon'/>
                    <div style={{position: 'absolute', width: '100%'}}>
                        <div style={{fontSize:'10px',position: 'relative', left:'-16px', right:0}}>
                            Dashboard
                        </div>
                    </div>
                </Link>

                <Link 
                    to='/Students/MyCourses' 
                    title='My Courses' 
                    className={activeTab === 'myCourses' ? 'active' : ''}
                >
                    <div className='classes-icon'/>
                    <div style={{position: 'absolute', width: '100%'}}>
                        <div style={{fontSize:'10px',position: 'relative', left:'-17px', right:0}}>
                            My Courses
                        </div>
                    </div>
                </Link>
                
                <Link 
                    to='/Students/MyResult' 
                    title='My Result' 
                    className={activeTab === 'myResult' ? 'active' : ''}
                >
                    <div className='myWork-icon'/>
                    <div style={{position: 'absolute', width: '100%'}}>
                        <div style={{fontSize:'10px',position: 'relative', left:'-12px', right:0}}>
                            My Result
                        </div>
                    </div>
                </Link>

                <Link 
                    to='/Students/Time-Table' 
                    title='Time Table' 
                    className={activeTab === 'timeTable' ? 'active' : ''} 
                >
                    <div className='time-table-icon' title='Time Table'/>
                    <div style={{position: 'absolute', width: '100%'}}>
                        <div style={{fontSize:'10px', position: 'relative', left:'-15px', right:0}}>
                            Time Table
                        </div>
                    </div>
                </Link>

                <Link 
                    to='/Students/Media' 
                    title='Media' 
                    className={activeTab === 'media' ? 'active' : ''}
                >
                    <div className='events-icon'/>
                    <div style={{position: 'absolute', width: '100%'}}>
                        <div style={{fontSize:'10px', position: 'relative', left:'-6px', right:0}}>
                            Media
                        </div>
                    </div>
                </Link>

                <Link 
                    to='/Students/Reports' 
                    title='Report' 
                    className={activeTab === 'reports' ? 'active' : ''}
                >
                    <div className='reports-icon'/>    
                    <div style={{position: 'absolute', width: '100%'}}>
                        <div style={{fontSize:'10px', position: 'relative', left:'-10px', right:0}}>
                            Reports
                        </div>
                    </div>
                </Link> 

                <Link 
                    to='/student-login' 
                    className='logout-container' 
                    title='Log-out'
                >
                    <div className='logout-icon'/>
                    <div style={{position: 'absolute', width: '100%'}}>
                        <div style={{fontSize:'10px',position: 'relative', left:'-12px', right:0}}>
                            Sign out
                        </div>
                    </div>
                </Link>
            
                <div 
                    onClick={handleFullBar} 
                    className='toggled-side-navigation-icon' 
                    title='Show more information' />
            </div>
    );
}

export default ToggledSideNavigation;