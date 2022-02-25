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


function FullSideNavigation({generalToggledBar, setGeneralToggledBar}) {

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
                pathname:'/Staff/SelectCampus',
                
            }}
                className='institution-active' 
            >
                <div className='institution-campus-icon'/>
                <div className='institution-side-navigation-text'>Campus</div>
            </Link>
            <Link to={{
                pathname:'/Staff/SelectCampus',
                
            }}
                className='' 
            >
                <div className='institution-profile-icon'/>
                <div className='institution-side-navigation-text'>Profile</div>
            </Link>

            <Link to={{     
                    pathname:'/Staff/SelectCampus',
                    
                }}
                className='' 
            >
                <div className='institution-manage-users-icon'/>
                <div className='institution-side-navigation-text'>Staff</div>
            </Link>

            <Link to={{     
                    pathname:'/Staff/SelectCampus',
                    
                }}
                className='' 
            >
                <div className='institution-information-icon'/>
                <div className='institution-side-navigation-text'>Information</div>
            </Link>

            <Link to={{     
                    pathname:'/Staff/SelectCampus',
                    
                }}
                className='' 
            >
                <div className='institution-time-table-icon'/>
                <div className='institution-side-navigation-text'>calendar</div>
            </Link>

            <Link to={{     
                    pathname:'/Staff/SelectCampus',
                    
                }}
                className='' 
            >
                <div className='institution-notification-icon'/>
                <div className='institution-side-navigation-text'>Notification</div>
            </Link>

            <Link to={{     
                    pathname:'/Staff/SelectCampus',
                    
                }}
                className='' 
            >
                <div className='institution-events-icon'/>
                <div className='institution-side-navigation-text'>Event</div>
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
            setGeneralToggledBar={setGeneralToggledBar} />
    );
}

export default FullSideNavigation;
