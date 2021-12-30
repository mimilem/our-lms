import React, {useState} from 'react';

import './subjectSelection.css';
import '../staffPages.css';


import Header from '../../Components/Header';
import SideNavigation from '../../Components/SideNavigation';


function SubjectSelection() {

    // Initiate a boolean state to check weither 
    // the bar is toggled.
    const [toggledBar, setToggledBar] = useState(false);

    return (
        <div className='staff-Studentprofile-container'>

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

            <div className='staff-Studentprofile-content'>
                
                <div className='staff-pages-header-tilte'>Select a module</div>
 
                <hr className='staff-page-hr' />

                <div className='exams-calendar-tilte'>
                    Mathematics <div className='access'>{'>>'}</div>
                </div>
                <div className='exams-calendar-tilte'>
                    Physics <div className='access'>{'>>'}</div>
                </div>
                <div className='exams-calendar-tilte'>
                    Chemestry <div className='access'>{'>>'}</div>
                </div>
                <div className='exams-calendar-tilte'>
                    Biology <div className='access'>{'>>'}</div>
                </div>
                <div className='exams-calendar-tilte'>
                    Latin <div className='access'>{'>>'}</div>
                </div>
            </div>
        </div>
    );
}

export default SubjectSelection;