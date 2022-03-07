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

import './instituteFullSideNavigation.css';
import '../instituteSideNav.css';
import ToggledSideNavigation from '../ToggledSideNavigation';


function FullSideNavigation({generalToggledBar, setGeneralToggledBar, activeTab}) {

    async function signOut() {
        try {
            await Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    return (
        generalToggledBar === false ? 
        <div className="intitution-full-side-navigation-container">
            <Link to={{
                pathname:'/Staff/AdminProfile',
            }}
                className={activeTab === 'adminProfile' ? 'institution-active' : '' } 
            >
                <div className='institution-profile-icon'/>
                <div className='institution-side-navigation-text'>Admin Profile</div>
            </Link>
            
            <Link to={{     
                    pathname:'/Staff/GeneralDetails',
                }}
                className={activeTab === 'generalDetails' ? 'institution-active' : '' }
            >
                <div className='institution-information-icon'/>
                <div className='institution-side-navigation-text'>General Details</div>
            </Link>

            <Link to={{     
                    pathname:'/Staff/GeneralStaff',
                }}
                className={activeTab === 'generalStaff' ? 'institution-active' : '' } 
            >
                <div className='institution-manage-users-icon'/>
                <div className='institution-side-navigation-text'>General Staff</div>
            </Link>
            
            <Link to={{
                pathname:'/Staff/SelectCampus',
            }}
                className={activeTab === 'campus' ? 'institution-active' : '' }
            >
                <div className='institution-campus-icon'/>
                <div className='institution-side-navigation-text'>Campuses</div>
            </Link>

            <Link to={{     
                    pathname:'/Staff/AcademicCalendar',
                }}
                className={activeTab === 'academicCalendar' ? 'institution-active' : '' }
            >
                <div className='institution-time-table-icon'/>
                <div className='institution-side-navigation-text'>General Calendar</div>
            </Link>

            <Link to={{     
                    pathname:'/Staff/GeneralFees',
                }}
                className={activeTab === 'generalFees' ? 'institution-active' : '' } 
            >
                <div className='institution-fees-icon'/>
                <div className='institution-side-navigation-text'>Fees</div>
            </Link>

            <Link to={{     
                    pathname:'/Staff/GeneralNotifications',
                }}
                className={activeTab === 'generalNotifications' ? 'institution-active' : '' }
            >
                <div className='institution-notification-icon'/>
                <div className='institution-side-navigation-text'>General Notifications</div>
            </Link>

            <Link to={{     
                    pathname:'/Staff/GeneralEvent',
                }}
                className={activeTab === 'generalEvents' ? 'institution-active' : '' } 
            >
                <div className='institution-events-icon'/>
                <div className='institution-side-navigation-text'>General Events</div>
            </Link>

            <Link to={{     
                    pathname:'/Staff/Library',
                }}
                className={activeTab === 'library' ? 'institution-active' : '' } 
            >
                <div className='institution-library-icon'/>
                <div className='institution-side-navigation-text'>Library</div>
            </Link>

            <Link 
                to='/Staff-login' 
                onClick={signOut}
                className='institution-logout-container'>
                <div className='institution-logout-icon'/>
                <div className='institution-side-navigation-text'>Sign Out</div>
            </Link> 

            <div 
                className='institution-toggle-icon'
                title='Show less information' 
                onClick = { () => setGeneralToggledBar(true)}
            />
        </div>
        : 
        <ToggledSideNavigation
            generalToggledBar={generalToggledBar} 
            setGeneralToggledBar={setGeneralToggledBar}
            activeTab={activeTab} />
    );
}

export default FullSideNavigation;
