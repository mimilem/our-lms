import React, { useState } from 'react';

import './adminProfileNavTab.css';

import ProfileAdminNav from '../ProfileAdminNav';


function AdminProfileNavTab() {

    const [choseTab, setChosetab] = useState('profile')

    return (
        <div>
            <div className='admin-navTab-container'>
                <div className="admin-navTab-element">
                    Profile
                </div>
                <div className="admin-navTab-element">
                    Stats
                </div>
            </div>
            <div>
                {
                    choseTab === 'profile' ? <ProfileAdminNav /> : ''
                }
            </div>
        </div>
    );
}

export default AdminProfileNavTab;