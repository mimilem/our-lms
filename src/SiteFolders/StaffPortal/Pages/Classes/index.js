import React, {useState} from 'react';

//import the styling compnent(s).
import './classes.css';
import '../staffPages.css';

//import all assets.
import addButton from '../../../../assets/plus.png'

//import all components that will be 
//displayed on the pages.
import ClassesList from '../../Components/ClassesList';
import Header from '../../Components/Header';
import SideNavigation from '../../Components/SideNavigation';


function ClassesPage() {

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
                <img 
                    src={addButton}
                    alt=''
                    className='addButton-icon'
                    title='Add a new class'/>

                <ClassesList/>

            </div>
        </div>
    );
}

export default ClassesPage;