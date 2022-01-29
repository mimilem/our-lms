import React, {useState} from 'react';

import './studentsProfile.css';

import Header from '../../Components/Header';
import SideNavigation from '../../Components/SideNavigation';
import HeaderAndSideNav from '../../Components/HeaderAndSideNav';

import studentAvatar from '../../../../assets/ThatsMeSalam.jpg'
import StudentProfileNavTab from './Components/StudentProfileNavTab';


function StudentsProfile() {

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(true);
    const [activeTab, setActiveTab] = useState('department');

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
                        <div className='centered-student-name'>Nephthali Salam</div>
                        <div className='centered-student-email'>snephthali@gmail.com</div>
                        
                        <div className='student-profile-hr'/>

                        <div className='centered-student-email'>Grade: 1st Year</div>
                        
                        <div className='student-profile-hr'/>
                        
                        <div className='centered-student-email'>Phone: +27 67 791 9267</div>
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