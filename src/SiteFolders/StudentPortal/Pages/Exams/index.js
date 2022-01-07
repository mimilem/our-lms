import React, {useState} from 'react';
import { Link } from 'react-router-dom';

//import the styling compnent(s).
import './student-portail-exams.css';
import '../studentsPages.css';

//import all components that will be 
//displayed on the pages.
import Header from '../../Components/Header';
import SideNavigation from '../../Components/SideNavigation';


function StudentPortailExamsPage() {

    // Initiate a boolean state to check weither 
    // the bar is toggled.
    const [toggledBar, setToggledBar] = useState(false);
    
    return (
        <div className='staff-pages-container'>
            
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

            <div className='staff-pages-content'>
                <div className='staff-pages-header-tilte'>Exams</div>
                
                <hr className='staff-page-hr' />

                <Link to='/Staff/Exams/Calendar' className='exams-calendar-tilte'>
                    Access the exams calendar <div className='access'>→</div>
                </Link>

                <div className='exams-classes-container'>
                    <div className='exams-classes-tilte'>Select a class </div>

                <br/>
                    
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
        </div>
    );
}

export default StudentPortailExamsPage;