import React, {useState} from 'react';

import './classes.css'

import Header from '../../Components/Header';
import SideNavigation from '../../Components/SideNavigation';
import ClassesList from '../../Components/ClassesList';


function ClassesPage() {

    // Initiate a boolean state to check weither 
    // the bar is toggled.
    const [toggledBar, setToggledBar] = useState(false);

    return (
        <div className="staff-classes-container">
            
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

            <div className='staff-classes-content'>
                <ClassesList/>
            </div>
        </div>
    );
}

export default ClassesPage;