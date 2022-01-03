import React from 'react';
import {Link} from 'react-router-dom';


function DepartmentsList() {
    return (
        <div>
            <Link to='/Staff/Class' className='exams-calendar-tilte'>
                + Add a new department
            </Link>     
            <Link to='/Staff/Class' className='exams-calendar-tilte'>
                Commerce, Law and Management <div className='access'>{'>>'}</div>
            </Link>     
            <Link to='/Staff/Class' className='exams-calendar-tilte'>
                Engineering and the Built Environment <div className='access'>{'>>'}</div>
            </Link>     
            <Link to='/Staff/Class' className='exams-calendar-tilte'>
                Health Sciences <div className='access'>{'>>'}</div>
            </Link>     
        </div>
    );
}

export default DepartmentsList;