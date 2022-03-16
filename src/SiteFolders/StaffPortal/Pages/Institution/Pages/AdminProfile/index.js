import React, { useState, useEffect } from 'react';

import { Auth } from "aws-amplify";

import './adminProfile.css';

import adminAvatar from '../../../../../../assets/avatar.png'

import HeaderAndSideNav from '../../../../Components/HeaderAndSideNav';
import SideNavigation from '../../Components/SideNavigation';
import AdminProfileNavTab from './Components/AdminProfileNavTab';


function AdminProfile() {

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(false);
    const [activeTab, setActiveTab] = useState('adminProfile');
    const [choosedCampus, setChoosedCampus] = useState(false);

    const [generalToggledBar, setGeneralToggledBar] = useState(false);

    const [error, setError] = useState(null);
    const [currentUsername, setCurrentUsername] = useState('');
    const [currentName, setCurrentName] = useState('');
    const [currentFamilyName, setCurrentFamilyName] = useState('');
    const [currentPhoneNumber, setCurrentPhoneNumber] = useState('');
    const [currentEmail, setCurrentEmail] = useState('');
    const [currentUserRole, setCurrentUserRole] = useState('');

    useEffect(() => {
        
        //automatically scroll to top
        window.scrollTo(0,0);

        try {
          setError(null);
    
          Auth.currentAuthenticatedUser({
            bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
          }).then(user => {
            setCurrentUsername(user.username);
            setCurrentName(user.attributes.name);
            setCurrentFamilyName(user.attributes.family_name);
            setCurrentPhoneNumber(user.attributes.phone_number);
            setCurrentEmail(user.attributes.email);
            setCurrentUserRole('custom:user_role');
            // TBD
          }).catch(err => setError(err));
        }
        catch (e) {
          setError(e);
        }
    }, []);

    return (
        <div className='campus-page-content'>

            <HeaderAndSideNav 
                toggledBar={toggledBar} 
                setToggledBar={setToggledBar}
                activeTab={activeTab}
                choosedCampus={choosedCampus} />

            <SideNavigation 
                generalToggledBar={generalToggledBar} 
                setGeneralToggledBar={setGeneralToggledBar}
                activeTab={activeTab} />

            <div className='adminProfile-content' > 
                
                <div 
                    className='staff-pages-header-tilte' 
                    style={{marginLeft: '3rem'}} >
                    Admin Profile
                </div>
                
                <hr className='staff-page-hr' />
                
                <div>
                    <div className='adminProfile-main-card'>
                        <div className='adminAvatar-container'>
                            <img 
                                src={adminAvatar}
                                alt=''
                                className='adminAvatar'/>
                        </div>
                        <div className='centered-text'>
                            <div className='centered-admin-name'>{currentName} {currentFamilyName}</div>
                            <div className='centered-admin-email'>{currentEmail}</div>
                            
                            <div className='adminProfile-hr'/>
                            

                            <div className='adminProfile-hr'/>

                            <div className='centered-admin-email'>
                                {currentUserRole} 1
                            </div>
                            
                            <div className='adminProfile-hr'/>
                            
                            <div className='centered-admin-email'>Phone: {currentPhoneNumber}</div>
                        </div>
                    </div>

                    <div>
                        <AdminProfileNavTab />
                    </div>
                </div>
            
            </div>
        </div>
    );
}

export default AdminProfile;