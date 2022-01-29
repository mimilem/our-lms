import React from 'react';

import './studentProfileNavTab.css';


function StudentProfileNavTab() {
    return (
        <div className='student-navTab-container'>
            <div className="student-navTab-element">
                Profile
            </div>
            <div className="student-navTab-element">
                Active Courses
            </div>
            <div className="student-navTab-element">
                Stats
            </div>
            <div className="student-navTab-element">
                Contact
            </div>
        </div>
    );
}

export default StudentProfileNavTab;