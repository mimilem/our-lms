import React from 'react';
import { Link } from 'react-router-dom';

import './classExams.css';


function Exams(props) {
    return (
        <div className='class-exams-container'>
            <Link to='/Staff/Exams/Calendar' className='exams-calendar-tilte'>
                Access the exams calendar <div className='access'>→</div>
            </Link>
        </div>
    );
}

export default Exams;