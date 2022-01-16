
// This is the profile section component
// of the student dashboard page.

import React from 'react';

//import the styling compnent(s).
import './student-dashboard-profile.css';
import '../../../studentsPages.css';


function DashboardProfife() {
    
    return (
        <div className='studentDash-profile-container'>
            <div className='studentDash-profile-card'>
                <div className='studentDash-profile-content'>
                    <div className='studentDash-card-title'>My Profile</div> 
                    <hr className='students-page-hr'/>

                    <div className='studentDash-profile-details'>
                        <div className='studentDash-profile-name'>
                            Nephthali R. SALAM
                        </div>
                        <div className='studentDash-profile-status'>
                            Status: active
                        </div>
                    </div>
                    <div className='studentDash-class-details'>
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