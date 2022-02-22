/*
    The full navigation component with all 
    information when the side navigation is 
    not toggled.

    This component inherits and uses classNames
    and stylings from the SideNavigation index files

*/

import React from 'react';
import { Link } from 'react-router-dom';

import { Auth } from 'aws-amplify';

import './fullSideNavigation.css';
import ToggledSideNavigation from '../ToggledSideNavigation';


function FullSideNavigation(props) {

    const { toggledBar, setToggledBar, activeTab, campusDetails, choosedCampus } = props;

    // Change the initiale state for when the toggle 
    // button is clicked on. 
    const handleToggledBar = () => {
        setToggledBar(true)
    }

    async function signOut() {
        try {
            await Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    return (
        toggledBar === false ?
            choosedCampus === true ?
                <div className="full-side-navigation-container">
                    
                    <Link to={{
                        pathname:'/Staff/SelectCampus',
                        state: campusDetails
                    }}
                        className={activeTab === 'campus' ? 'active' : ''} 
                    >
                        <div className='campus-icon'/>
                        <div className='side-navigation-text'>Campus</div>
                    </Link>
                    <Link to={{
                        pathname:'/Staff/Dashboard',
                        state: campusDetails
                    }}
                        className={activeTab === 'dashboard' ? 'active' : ''} 
                    >
                        <div className='dashboard-icon'/>
                        <div className='side-navigation-text'>Dashboard</div>
                    </Link>

                    <Link to={{     
                        pathname:'/Staff/Departments',
                        state: campusDetails
                    }}
                        className={activeTab === 'department' ? 'active' : ''} 
                    >
                        <div className='classes-icon'/>
                        <div className='side-navigation-text'>Falculties</div>
                    </Link>

                    <Link to={{     
                        pathname:'/Staff/Modules-Shelf',
                        state: campusDetails
                    }}
                        className={activeTab === 'moduleShelf' ? 'active' : ''} 
                    >
                        <div className='module-icon'/>
                        <div className='side-navigation-text'>Module Shelf</div>
                    </Link>

                    <Link to={{     
                            pathname:'/Staff/Students',
                            state: campusDetails
                        }}
                        className={activeTab === 'students' ? 'active' : ''} 
                    >
                        <div className='students-icon'/>
                        <div className='side-navigation-text'>Students</div>
                    </Link>

                    <Link to={{     
                            pathname:'/Staff/ManageUsers',
                            state: campusDetails
                        }}
                        className={activeTab === 'manageusers' ? 'active' : ''} 
                    >
                        <div className='manage-users-icon'/>
                        <div className='side-navigation-text'>Manage Users</div>
                    </Link>

                    <Link to={{     
                            pathname:'/Staff/Exams',
                            state: campusDetails
                        }}
                        className={activeTab === 'exams' ? 'active' : ''} 
                    >
                        <div className='exams-icon'/>
                        <div className='side-navigation-text'>Exams</div>
                    </Link>
                    {/* 
                    <Link to='/Staff/Time-Table'
                        className={activeTab === 'timeTable' ? 'active' : ''} 
                    >
                        <div className='time-table-icon'/>
                        <div className='side-navigation-text'>Time Table</div>
                    </Link> */}

                    <Link to={{     
                            pathname:'/Staff/Events',
                            state: campusDetails
                        }}
                        className={activeTab === 'media' ? 'active' : ''} 
                    >
                        <div className='events-icon'/>
                        <div className='side-navigation-text'>Media</div>
                    </Link>

                    <Link 
                        to='/' 
                        onClick={signOut}
                        className='logout-container'>
                        <div className='logout-icon'/>
                        <div className='side-navigation-text'>Sign Out</div>
                    </Link> 

                    <div 
                        onClick={handleToggledBar}
                        className='toggle-icon'
                        title='Show less information' 
                    />
                </div>
            : []
            
            : 
            
            <ToggledSideNavigation 
                toggledBar={toggledBar} 
                setToggledBar={setToggledBar}
                activeTab={activeTab}
                campusDetails={campusDetails}
                choosedCampus={choosedCampus} />
    );
}

export default FullSideNavigation;
