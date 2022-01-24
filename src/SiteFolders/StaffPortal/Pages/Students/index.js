import React, {useState} from 'react';

//import the styling compnent(s).
import './students.css';
import '../staffPages.css';

//import all components that will be 
//displayed on the pages.
import Header from '../../Components/Header';
import SideNavigation from '../../Components/SideNavigation';
import StudentsList from '../../Components/StudentsList';
import HeaderAndSideNav from '../../Components/HeaderAndSideNav';


function StudentsPage() {

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(false);
    const [activeTab, setActiveTab] = useState('students');

    return (
        <div className="staff-pages-container">

            <HeaderAndSideNav 
                toggledBar={toggledBar} 
                setToggledBar={setToggledBar}
                activeTab={activeTab} /> 

            <div className='staff-pages-content'>

            <div className='staff-pages-header-tilte'>Students</div>
                <hr className='staff-page-hr'/>

                <div className='students-page-header'>
                    <div className='search-students-container'>
                        <input
                            type='text'
                            placeholder='Search a student'
                            className='search-student'
                        />
                    </div>

                    <div className='register-button-container'>
                        <button 
                            className='register-button'
                            title='Register a student'>
                            Register
                        </button>
                    </div>
                </div>

                <StudentsList />

            </div>
        </div>
    );
}

export default StudentsPage;