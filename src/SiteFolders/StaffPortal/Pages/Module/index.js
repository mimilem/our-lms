import React, {useState} from 'react';

//import the styling compnent(s).
import './module.css';
import '../staffPages.css';

//import all components that will be 
//displayed on the pages.
import Header from '../../Components/Header';
import SideNavigation from '../../Components/SideNavigation';


function ModulePage() {

    // Initiate a boolean state to check weither 
    // the bar is toggled.
    const [toggledBar, setToggledBar] = useState(false);

    return (
        <div  className="staff-pages-container">

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
                <div className='staff-pages-header-tilte'>Module shelf</div>
                <hr className='staff-page-hr'/>
            </div>
            
        </div>
    );
}

export default ModulePage;