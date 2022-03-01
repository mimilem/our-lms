import React, { useState, useEffect } from 'react';

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

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0,0);
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
                            <div className='centered-admin-name'>Name Surname</div>
                            <div className='centered-admin-email'>name@example.com</div>
                            
                            <div className='adminProfile-hr'/>
                            

                            <div className='adminProfile-hr'/>

                            <div className='centered-admin-email'>
                                Admin
                            </div>
                            
                            <div className='adminProfile-hr'/>
                            
                            <div className='centered-admin-email'>Phone: +000 000 0000</div>
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