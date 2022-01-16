
// This is the 'MyCourses' page index component 
// of the student portal.

import React, {useEffect, useState}  from 'react';
import { Link } from 'react-router-dom';

//import the styling compnent(s).
import '../studentsPages.css';
import '../../Components/studentsComponents.css';

//import all components that will be 
//displayed on the pages.
import Header from '../../Components/Header';
import SideNavigation from '../../Components/SideNavigation';


function StudentMyCourses() {

    // Initiate a boolean state to check weither 
    // the bar is toggled.
    const [toggledBar, setToggledBar] = useState(false);
    const [activeTab, setActiveTab] = useState('myCourses');

    //Set the document title of the page when it loads.
    useEffect(() => {
        document.title = "My Courses | Vinco-elearning"
     }, []);

    return (
        <div className='students-pages-container'>
            
            <Header />
            
            {/* Set conditions to display the full or toggle side navigation */}
            <div 
                className={
                    toggledBar === false ? 
                        'full-side-navigation-container' 
                        : 
                        'toggled-side-navigation-container' 
                }>
                <SideNavigation 
                    toggledBar={toggledBar} 
                    setToggledBar={setToggledBar} 
                    activeTab={activeTab} />
            </div>

            <div className='students-pages-content'>
                <div className='students-pages-header-tilte'>Computer Science - First Year</div>
                
                <hr className='students-page-hr' />

                <Link to='/Students/MyCourses/CourseName'>
                    <div className='gradient-blue-card-container'>
                        <div className='top-left-text'>Programming 511</div>
                        <div className='bottom-right-text'>Lecturer: Leila Fourie</div>
                    </div>
                </Link>

                <div className='gradient-blue-card-container'>
                    <div className='top-left-text'>Network 511</div>
                    <div className='bottom-right-text'>Lecturer: Leila Fourie</div>
                </div>
                <div className='gradient-blue-card-container'>
                    <div className='top-left-text'>Network 511</div>
                    <div className='bottom-right-text'>Lecturer: Leila Fourie</div>
                </div>
                <div className='gradient-blue-card-container'>
                    <div className='top-left-text'>Network 511</div>
                    <div className='bottom-right-text'>Lecturer: Leila Fourie</div>
                </div>
            
            </div>
        </div>
    );
}

export default StudentMyCourses;