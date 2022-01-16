
// This is the exam page component 
// of the student portal.

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//import the styling compnent(s).
import './student-portal-exams.css';
import '../studentsPages.css';
import '../../Components/studentsComponents.css';

//import all components that will be 
//displayed on the pages.
import Header from '../../Components/Header';
import SideNavigation from '../../Components/SideNavigation';


function StudentPortailExamsPage() {

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(true);
    const [activeTab, setActiveTab] = useState('dashboard');

    //Set the document title of the page when it loads.
    useEffect(() => {
        document.title = "Exams | Vinco-elearning"
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
                <div className='students-pages-header-tilte'>Exams</div>
                
                <hr className='students-page-hr' />

                <Link to='/Staff/Exams/Calendar' className='active-dark-horizontal-bar'>
                    Access the exams calendar <div className='access'>→</div>
                </Link>

                <div className='disabled-dark-horizontal-bar'>
                    <div className='exams-classes-tilte'>Select a class </div>

                    <br/>
                    
                    <Link to='/Students/Modules/Module'>
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
        </div>
    );
}

export default StudentPortailExamsPage;