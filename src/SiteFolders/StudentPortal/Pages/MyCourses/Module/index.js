import React, { useEffect, useState }  from 'react';

//import the styling compnent(s).
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
    const [activeTab, setActiveTab] = useState('myCourses');

    //Set the document title of the page when it loads.
    useEffect(() => {
        document.title = "Computer Science | Vinco-elearning"
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
                <ClassPageTopNavigation />
            </div>
        </div>
    );
}

export default StudentsModule;