
// This is the quick links section component
// of the student dashboard page.

import React from 'react';
import { Link } from 'react-router-dom';

//import the styling compnent(s).
import './dashboard-quickLinks.css';
import '../../../studentsPages.css';


function QuickLinks() {
    return (
        <div className='studentDash-quickLinks-container'>
            <div className='section-title'>Quik Links</div>
            <hr className='students-page-hr'/>

            <div className='studentDash-quickLinks-cards'>
                <Link to='/Students/Exams'>
                    <div className='gradient-blue-card-container'>
                        <div className='top-left-text'>Exams</div>
                    </div>
                </Link>

                <Link to='/Students/Reports'>
                    <div className='gradient-blue-card-container'>
                        <div className='top-left-text'>Reports</div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default QuickLinks;