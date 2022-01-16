import React from 'react';

import './classStudents.css';

import StudentsList from '../../../../Components/StudentsList';


function Students() {
    return (
        <div className='class-students-container'>
            <StudentsList />
        </div>
    );
}

export default Students;