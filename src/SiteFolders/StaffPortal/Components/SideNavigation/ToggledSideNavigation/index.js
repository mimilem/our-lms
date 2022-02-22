/*
    The toggled navigation component with less 
    information when the side navigation is 
    toggled.

    This component inherits and uses classNames
    and stylings from the SideNavigation index files

*/

import React from 'react';
import { Link } from 'react-router-dom';

import { Auth } from 'aws-amplify';

import './ToggledSideNavigation.css';
import FullSideNavigation from '../FullSideNavigation';


function ToggledSideNavigation({
    toggledBar, 
    setToggledBar, 
    activeTab, 
    campusDetails, 
    choosedCampus
}) {

    // Change the initiale state for when the 'Show 
    // Full Bar' button is clicked on.
    const handleFullBar = () => {
        setToggledBar(false)
    }
    
    async function signOut() {
        try {
            await Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    return (
        toggledBar === true ?

            choosedCampus === true ?

                <div className="toggled-side-navigation-container">
                    
                    <Link to={{
                        pathname:'/Staff/SelectCampus',
                        state: campusDetails
                    }}
                        className={activeTab === 'campus' ? 'active' : ''} 
                        title='Select or create a campus' >
                        <div className='campus-icon'/>
                        <div style={{position: 'absolute', width: '100%'}}>
                            <div style={{fontSize:'10px',position: 'relative', left:'-10px', right:0}}>
                                Campus
                            </div>
                        </div>  
                    </Link>
                    
                    <Link to={{
                        pathname:'/Staff/Dashboard',
                        state: campusDetails
                    }}
                        className={activeTab === 'dashboard' ? 'active' : ''} 
                        title='Dashboard' >
                        <div className='dashboard-icon'/>
                        <div style={{position: 'absolute', width: '100%'}}>
                            <div style={{fontSize:'10px',position: 'relative', left:'-16px', right:0}}>
                                Dashboard
                            </div>
                        </div>  
                    </Link>

                    <Link to={{     
                            pathname:'/Staff/Departments',
                            state: campusDetails
                        }}
                        className={activeTab === 'department' ? 'active' : ''}  
                        title='Faculties' >
                        <div className='classes-icon'/>
                        <div style={{position: 'absolute', width: '100%'}}>
                            <div style={{fontSize:'10px',position: 'relative', left:'-10px', right:0}}>
                                Faculties
                            </div>
                        </div>
                    </Link>

                    <Link to={{     
                            pathname:'/Staff/Modules-Shelf',
                            state: campusDetails
                        }}
                        className={activeTab === 'moduleShelf' ? 'active' : ''} 
                        title='Modules'>
                        <div className='module-icon'/>
                        <div style={{position: 'absolute', width: '100%'}}>
                            <div style={{fontSize:'10px',position: 'relative', left:'-10px', right:0}}>
                                Modules
                            </div>
                        </div>
                    </Link>

                    <Link to={{     
                            pathname:'/Staff/Students',
                            state: campusDetails
                        }}
                        className={activeTab === 'students' ? 'active' : ''} 
                        title='Students'>
                        <div className='students-icon'/>
                        <div style={{position: 'absolute', width: '100%'}}>
                            <div style={{fontSize:'10px',position: 'relative', left:'-10px', right:0}}>
                                Students
                            </div>
                        </div>
                    </Link>

                    <Link to={{     
                            pathname:'/Staff/ManageUsers',
                            state: campusDetails
                        }}
                        className={activeTab === 'manageusers' ? 'active' : ''} 
                        title='Manage Users'>
                        <div className='manage-users-icon'/>
                        <div style={{position: 'absolute', width: '100%'}}>
                            <div style={{fontSize:'10px',position: 'relative', left:'-23px', right:0}}>
                                Manage Users
                            </div>
                        </div>
                    </Link>

                    <Link to={{     
                            pathname:'/Staff/Exams',
                            state: campusDetails
                        }} 
                        className={activeTab === 'exams' ? 'active' : ''}
                        title='exams' >
                        <div className='exams-icon' title='Exams'/>
                        <div style={{position: 'absolute', width: '100%'}}>
                            <div style={{fontSize:'10px',position: 'relative', left:'-6px', right:0}}>
                                Exams
                            </div>
                        </div>
                    </Link>

                    {/* <Link to='/Staff/Time-Table'
                        className={activeTab === 'timeTable' ? 'active' : ''}  
                        title='Time Table' >
                        <div className='time-table-icon' title='Time Table'/>
                        <div style={{position: 'absolute', width: '100%'}}>
                            <div style={{fontSize:'10px',position: 'relative', left:'-16px', right:0}}>
                                Time Table
                            </div>
                        </div>
                    </Link> */}

                    <Link to={{     
                            pathname:'/Staff/Events',
                            state: campusDetails
                        }}
                        className={activeTab === 'Media' ? 'active' : ''} 
                        title='Media' >
                        <div className='events-icon'/>
                        <div style={{position: 'absolute', width: '100%'}}>
                            <div style={{fontSize:'10px',position: 'relative', left:'-6px', right:0}}>
                                Events
                            </div>
                        </div>
                    </Link>

                    {/* <Link to='/Staff/Reports' title='Report'>
                        <div className='reports-icon'/>    
                    </Link> */}

                    <Link 
                        to='/' 
                        onClick={signOut}
                        className='logout-container' 
                        title='Log-out'>
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

            : []

            : 

            <FullSideNavigation />
    );
}

export default ToggledSideNavigation;