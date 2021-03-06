import React, {useState} from 'react';

import AllStudentsList from './AllStudentsList';
import PendingStudentsList from './PendingStudentsList';

import './studentsList.css';


function StudentsList({ studentFilterData }) {

    const [activeTab, setActiveTab] = useState('allStudents');

    return (
        <div className='studentList-container'>

            <div className='studentList-header'>
                <button 
                    onClick={()=> {setActiveTab('allStudents')}}
                    className={activeTab === 'allStudents' ? 'allStudents-active-button' : 'allStudents-button'}>
                    Active Students
                </button>
                <button 
                    onClick={()=> {setActiveTab('pendingStudents')}}
                    className={activeTab === 'allStudents' ? 'pendingStudents-button' : 'pendingStudents-active-button'}>
                    Pending Status
                </button>
            </div>

            <hr className='staff-page-hr' style={{marginTop:10}}/>

            { activeTab === 'allStudents' ? 
                <AllStudentsList studentFilterData={studentFilterData} /> : <PendingStudentsList /> }
        </div>
    );
}

export default StudentsList;