import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';

import './studentsProfile.css';

import HeaderAndSideNav from '../../Components/HeaderAndSideNav';

import studentAvatar from '../../../../assets/avatar.png'
import StudentProfileNavTab from './Components/StudentProfileNavTab';


function StudentsProfile() {

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(true);
    const [activeTab, setActiveTab] = useState('department');

    let location = useLocation()

    return (

        <div className="staff-pages-container">
            <HeaderAndSideNav
                toggledBar={toggledBar} 
                setToggledBar={setToggledBar}
                activeTab={activeTab} /> 

            <div className='staff-Studentprofile-content'>

                <div className='student-profile-main-card'>
                    <div className='studentAvatar-container'>
                        <img 
                            src={studentAvatar}
                            alt=''
                            className='studentAvatar'/>
                    </div>
                    <div className='centered-text'>
                        <div className='centered-student-name'>{location.state.studentFullname}</div>
                        <div className='centered-student-email'>{location.state.studentEmail}</div>
                        
                        <div className='student-profile-hr'/>
                        
                        <div className='centered-student-email'>
                            {location.state.studentDepartmentName}
                        </div>

                        <div className='student-profile-hr'/>

                        <div className='centered-student-email'>
                            {location.state.studentYear === 1 ? '1st year' : 
                                location.state.studentYear === 2 ? '2nd year': [] }
                        </div>
                        
                        <div className='student-profile-hr'/>
                        
                        <div className='centered-student-email'>Phone: {location.state.studentPhoneNumber}</div>
                    </div>
                </div>

                <div>
                    <StudentProfileNavTab />
                </div>
            </div>

        </div>
    );
}

export default StudentsProfile;