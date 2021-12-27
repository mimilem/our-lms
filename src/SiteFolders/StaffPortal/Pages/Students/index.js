import React, {useState} from 'react';

import './students.css'

import Header from '../../Components/Header';
import SideNavigation from '../../Components/SideNavigation';
import StudentsList from '../../Components/StudentsList';


function Students() {

    // Initiate a boolean state to check weither 
    // the bar is toggled.
    const [toggledBar, setToggledBar] = useState(false);

    return (
        <div className="staff-students-container">

            <Header />
            
            <div 
                className={
                    toggledBar === false ? 
                        'full-side-navigation-container' 
                        : 
                        'toggled-side-navigation-container' 
                }>
                <SideNavigation 
                    toggledBar={toggledBar} 
                    setToggledBar={setToggledBar} />
            </div> 

            <div className='staff-students-content'>

                <div className='search-students-header'>
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

export default Students;