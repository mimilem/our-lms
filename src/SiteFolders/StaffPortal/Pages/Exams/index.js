import React, {useState} from 'react';
import { Link } from 'react-router-dom';

//import the styling compnent(s).
import './exams.css';
import '../staffPages.css';

//import all components that will be 
//displayed on the pages.
import Header from '../../Components/Header';
import SideNavigation from '../../Components/SideNavigation';
import ClassesList from '../../Components/ClassesList'


function ExamsPage() {

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
                <div className='exams-calendar-header-tilte'>Exams</div>
                <hr />
                
                <Link to='/Staff/Exams/Calendar' className='exams-calendar-tilte'>
                    Access the exams calendar <div className='access'>{'>>'}</div>
                </Link>

                <div className='exams-classes-tilte'>
                    Select a class 
                    <div className='class-list-container'>
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default ExamsPage;