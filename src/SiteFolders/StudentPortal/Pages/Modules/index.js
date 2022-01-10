import React, {useEffect, useState}  from 'react';
import { Link } from 'react-router-dom';

//import the styling compnent(s).
import './studentModules.css';
import '../studentsPages.css';

//import all components that will be 
//displayed on the pages.
import Header from '../../Components/Header';
import SideNavigation from '../../Components/SideNavigation';


function StudentsModules() {

    // Initiate a boolean state to check weither 
    // the bar is toggled.
    const [toggledBar, setToggledBar] = useState(false);
    const [activeTab, setActiveTab] = useState('myCourses');

    return (
        <div className='students-pages-container'>
            
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
                    setToggledBar={setToggledBar} 
                    activeTab={activeTab} />
            </div>

            <div className='students-pages-content'>
                <div className='students-pages-header-tilte'>Computer Science - First Year</div>
                
                <hr className='students-page-hr' />

                <Link to='/Students/Modules/Module'>
                    <div className='module-card-container'>
                        <div className='course-name'>Programming 511</div>
                        <div className='lecturer-name'>Lecturer: Leila Fourie</div>
                    </div>
                </Link>

                <div className='module-card-container'>
                    <div className='course-name'>Network 511</div>
                    <div className='lecturer-name'>Lecturer: Leila Fourie</div>
                </div>
                <div className='module-card-container'>
                    <div className='course-name'>Network 511</div>
                    <div className='lecturer-name'>Lecturer: Leila Fourie</div>
                </div>
                <div className='module-card-container'>
                    <div className='course-name'>Network 511</div>
                    <div className='lecturer-name'>Lecturer: Leila Fourie</div>
                </div>
            
            </div>
        </div>
    );
}

export default StudentsModules;