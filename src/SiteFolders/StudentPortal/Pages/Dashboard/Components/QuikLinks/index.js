import React from 'react';
import { Link } from 'react-router-dom';

import './dashboard-quikLinks.css';


function QuikLinks() {
    return (
        <div className='dashboard-quickLinks-container'>
            <div className='section-title'>Quik Links</div>
            <hr className='students-page-hr'/>

            <div className='dashboard-quickLinks-cards'>
                <Link to='/Students/Exams'>
                    <div className='module-card-container'>
                        <div className='course-name'>Exams</div>
                    </div>
                </Link>

                <Link to='/Students/Reports'>
                    <div className='module-card-container'>
                        <div className='course-name'>Reports</div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default QuikLinks;