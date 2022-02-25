import React from 'react';
import { Link } from 'react-router-dom';

import { Auth } from 'aws-amplify';

import './toggledSideNavigation.css';
import '../instituteSideNav.css';


function ToggledSideNavigation({generalToggledBar, setGeneralToggledBar}) {
    
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
                pathname:'/Staff/SelectCampus',
            }}
                className='institution-active'
                title='Select or create a campus' >
                <div className='institution-campus-icon'/>
                <div style={{position: 'absolute', width: '100%'}}>
                    <div style={{fontSize:'10px',position: 'relative', left:'-12px', right:0}}>
                        Campus
                    </div>
                </div>  
            </Link>
            
            <Link to={{
                pathname:'/Staff/SelectCampus',
            }} 
                title='Profile' >
                <div className='institution-profile-icon'/>
                <div style={{position: 'absolute', width: '100%'}}>
                    <div style={{fontSize:'10px',position: 'relative', left:'-5px', right:0}}>
                        Profile
                    </div>
                </div>  
            </Link>

            <Link to={{     
                    pathname:'/Staff/SelectCampus',

                }}  
                title='Staff' >
                <div className='institution-manage-users-icon'/>
                <div style={{position: 'absolute', width: '100%'}}>
                    <div style={{fontSize:'10px',position: 'relative', left:'-3px', right:0}}>
                        Staff
                    </div>
                </div>
            </Link>

            <Link to={{     
                    pathname:'/Staff/SelectCampus-Shelf',

                }} 
                title='Information'>
                <div className='institution-information-icon'/>
                <div style={{position: 'absolute', width: '100%'}}>
                    <div style={{fontSize:'10px',position: 'relative', left:'-15px', right:0}}>
                        Information
                    </div>
                </div>
            </Link>

            <Link to={{     
                    pathname:'/Staff/SelectCampus',

                }} 
                title='Calendar'>
                <div className='institution-time-table-icon'/>
                <div style={{position: 'absolute', width: '100%'}}>
                    <div style={{fontSize:'10px',position: 'relative', left:'-12px', right:0}}>
                    Calendar
                    </div>
                </div>
            </Link>

            <Link to={{     
                    pathname:'/Staff/SelectCampus',

                }} 
                title='Notification'>
                <div className='institution-notification-icon'/>
                <div style={{position: 'absolute', width: '100%'}}>
                    <div style={{fontSize:'10px',position: 'relative', left:'-20px', right:0}}>
                        Notification
                    </div>
                </div>
            </Link>

            <Link to={{     
                    pathname:'/Staff/SelectCampus',

                }} 
                title='Event' >
                <div className='institution-events-icon'/>
                <div style={{position: 'absolute', width: '100%'}}>
                    <div style={{fontSize:'10px',position: 'relative', left:'-6px', right:0}}>
                        Events
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