import React, {useState} from 'react';

//import the styling compnent(s).
import './departments.css';
import '../staffPages.css';

//import all assets.
import addButton from '../../../../assets/plus.png'

//import all components that will be 
//displayed on the pages.
import ClassesList from '../../Components/ClassesList';
import Header from '../../Components/Header';
import SideNavigation from '../../Components/SideNavigation';
import DepartmentsList from '../../Components/DepartmentsList';


function DepartmentsPage() {

    // Initiate a boolean state to check weither 
    // the bar is toggled.
    const [toggledBar, setToggledBar] = useState(false);

    return (
        <div className="staff-pages-container">
            
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
                <div className='staff-pages-header-tilte'>Faculties and Schools</div>
                <hr className='staff-page-hr'/>

                <DepartmentsList />

            </div>
        </div>
    );
}

export default DepartmentsPage;