import React from 'react';

import './dashboard-profile.css'


function DashboardProfife(props) {
    return (
        <div className='dashboard-profile-container'>
            <div className='dashboard-profile-card'>
                <div className='dashboard-profile-content'>
                    <div className='dashboard-card-title'>My Profile</div> 
                    <hr className='students-page-hr'/>

                    <div className='dashboard-profile-details'>
                        <div className='dashboard-profile-name'>
                            Nephthali R. SALAM
                        </div>
                        <div className='dashboard-profile-status'>
                            Status: active
                        </div>
                    </div>
                    <div className='dashboard-class-details'>
                        <div>Student Number: 19992810</div>
                        <div>Campus: Braamfontein</div>
                        <div>Departement: Computer Science</div>
                        <div>Year: 3</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardProfife;