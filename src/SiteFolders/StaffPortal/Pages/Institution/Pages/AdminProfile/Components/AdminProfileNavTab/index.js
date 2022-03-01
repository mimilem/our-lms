import React from 'react';

import './adminProfileNavTab.css';


function AdminProfileNavTab() {
    return (
        <div className='admin-navTab-container'>
            <div className="admin-navTab-element">
                Profile
            </div>
            <div className="admin-navTab-element">
                Stats
            </div>
            <div className="admin-navTab-element">
                Contact
            </div>
        </div>
    );
}

export default AdminProfileNavTab;