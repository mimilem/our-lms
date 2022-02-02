import React from 'react';

//import the styling compnent(s).
import '../classComponent.css';
import '../../../staffPages.css'

//import all components that will be 
//displayed on the page.
import ClassPageTopNavigation from '../ClassPageTopNavigation';


function ClassHeader({ 
    tabContent, 
    chosedModule, 
    qualificationDetails,
    moduleDetails }) {
    
    return (
        <>
            <div className='staff-pages-header-dropdown'>
                <div>
                    <div className='staff-pages-header-tilte'>
                        {qualificationDetails.qualificationName} - {qualificationDetails.qualificationYear} Year
                    </div> 
                </div>
            </div>

            <hr className='staff-page-hr'/>          
            
            <div>
                <ClassPageTopNavigation 
                    tabContent={tabContent} 
                    chosedModule={chosedModule}
                    qualificationDetails={qualificationDetails}
                    moduleDetails={moduleDetails} />
            </div>
        </>
    );
}

export default ClassHeader;