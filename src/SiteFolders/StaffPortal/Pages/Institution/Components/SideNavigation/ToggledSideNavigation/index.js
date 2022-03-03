import React from 'react';
import { Link } from 'react-router-dom';

import { Auth } from 'aws-amplify';

import './toggledSideNavigation.css';
import '../instituteSideNav.css';


function ToggledSideNavigation({generalToggledBar, setGeneralToggledBar, activeTab}) {
    
    async function signOut() {
        try {
            await Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    return (
        <div className="institution-toggled-side-navigation-container">
                    
            <Link to={{
                pathname:'/Staff/AdminProfile',
            }}
                className={activeTab === 'adminProfile' ? 'institution-active' : '' }
                title='Admin Profile' >
                <div className='institution-profile-icon'/>
                <div style={{position: 'absolute', width: '100%'}}>
                    <div style={{fontSize:'10px',position: 'relative', left:'-6px', right:0}}>
                        Profile
                    </div>
                </div>  
            </Link>
                    
            <Link to={{
                pathname:'/Staff/GeneralDetails',
            }}
                className={activeTab === 'generalDetails' ? 'institution-active' : '' }
                title='General Details' >
                <div className='institution-information-icon'/>
                <div style={{position: 'absolute', width: '100%'}}>
                    <div style={{fontSize:'10px',position: 'relative', left:'-6px', right:0}}>
                        Details
                    </div>
                </div>  
            </Link>
                    
            <Link to={{
                pathname:'/Staff/GeneralStaff',
            }}
                className={activeTab === 'generalStaff' ? 'institution-active' : '' }
                title='General Details' >
                <div className='institution-manage-users-icon'/>
                <div style={{position: 'absolute', width: '100%'}}>
                    <div style={{fontSize:'10px',position: 'relative', left:'-2px', right:0}}>
                        Staff
                    </div>
                </div>  
            </Link>

            <Link to={{
                pathname:'/Staff/SelectCampus',
            }}
                className={activeTab === 'campus' ? 'institution-active' : '' }
                title='Select or create a campus' >
                <div className='institution-campus-icon'/>
                <div style={{position: 'absolute', width: '100%'}}>
                    <div style={{fontSize:'10px',position: 'relative', left:'-15px', right:0}}>
                        Campuses
                    </div>
                </div>  
            </Link>
            
            <Link to={{
                pathname:'/Staff/AcademicCalendar',
            }} 
                className={activeTab === 'academicCalendar' ? 'institution-active' : '' }
                title='Calendar' >
                <div className='institution-time-table-icon'/>
                <div style={{position: 'absolute', width: '100%'}}>
                    <div style={{fontSize:'10px',position: 'relative', left:'-10px', right:0}}>
                        Calendar
                    </div>
                </div>  
            </Link>

            <Link to={{     
                    pathname:'/Staff/GeneralFees',
                }}  
                className={activeTab === 'generalFees' ? 'institution-active' : '' }
                title='Fees' >
                <div className='institution-fees-icon'/>
                <div style={{position: 'absolute', width: '100%'}}>
                    <div style={{fontSize:'10px',position: 'relative', left:'-3px', right:0}}>
                        Fees
                    </div>
                </div>
            </Link>

            <Link to={{     
                    pathname:'/Staff/GeneralNotifications',
                }} 
                className={activeTab === 'generalNotifications' ? 'institution-active' : '' }
                title='General Notifications'>
                <div className='institution-notification-icon'/>
                <div style={{position: 'absolute', width: '100%'}}>
                    <div style={{fontSize:'10px',position: 'relative', left:'-20px', right:0}}>
                        Notifications
                    </div>
                </div>
            </Link>

            <Link to={{     
                    pathname:'/Staff/GeneralEvent',
                }} 
                className={activeTab === 'generalEvents' ? 'institution-active' : '' }
                title='General Events'>
                <div className='institution-events-icon'/>
                <div style={{position: 'absolute', width: '100%'}}>
                    <div style={{fontSize:'10px',position: 'relative', left:'-6px', right:0}}>
                        Events
                    </div>
                </div>
            </Link>

            <Link to={{     
                    pathname:'/Staff/SelectCampus',
                }} 
                className={activeTab === 'library' ? 'institution-active' : '' }
                title='Library'>
                <div className='institution-library-icon'/>
                <div style={{position: 'absolute', width: '100%'}}>
                    <div style={{fontSize:'10px',position: 'relative', left:'-6px', right:0}}>
                        Library
                    </div>
                </div>
            </Link>

            <Link 
                to='/Staff-login' 
                onClick={signOut}
                className='institution-logout-container' 
                title='Log-out'>
                <div className='institution-logout-icon'/>
                <div style={{position: 'absolute', width: '100%'}}>
                    <div style={{fontSize:'10px',position: 'relative', left:'-12px', right:0}}>
                        Sign out
                    </div>
                </div>
            </Link>
        
            <div 
                className='toggled-side-navigation-icon' 
                title='Show more information' 
                onClick = { () => setGeneralToggledBar(false)}/>
        </div>
    );
}

export default ToggledSideNavigation;