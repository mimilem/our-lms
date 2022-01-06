import React, {useEffect, useState}  from 'react';
import { Link } from 'react-router-dom';

//import the styling compnent(s).
import './studentModule.css';
import '../../studentsPages.css';

//import all components that will be 
//displayed on the pages.
import Header from '../../../Components/Header';
import SideNavigation from '../../../Components/SideNavigation';
import ClassPageTopNavigation from '../Components/ClassPageTopNavigation';


function StudentsModule() {

    // Initiate a boolean state to check weither 
    // the bar is toggled.
    const [toggledBar, setToggledBar] = useState(true);

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
                    setToggledBar={setToggledBar} />
            </div>

            <div className='students-pages-content'>
                <div className='students-pages-header-tilte'>Computer Science - First Year</div>
                
                <hr className='students-page-hr' />
                <ClassPageTopNavigation />
            </div>
        </div>
    );
}

export default StudentsModule;