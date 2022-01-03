import React, {useState} from 'react';

import { useDetectClickOutside } from 'react-detect-click-outside';

//import the styling compnent(s).
import './class.css';
import '../staffPages.css';

//import all assets.
import addButton from '../../../../assets/plus.png'
import down from '../../../../assets/down.png'

//import all components that will be 
//displayed on the pages.
import ClassesList from '../../Components/ClassesList';
import Header from '../../Components/Header';
import SideNavigation from '../../Components/SideNavigation';
import ClassPageTopNavigation from '../../Components/ClassPageTopNavigation';


function ClassPage() {

    const [isShown, setIsShown] = useState(false);

    // Initiate a boolean state to check weither 
    // the bar is toggled.
    const [toggledBar, setToggledBar] = useState(true);

    const closeDropdown = () => { setIsShown(false) }
    const ref = useDetectClickOutside({ onTriggered: closeDropdown });

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
                <div 
                    className='staff-pages-header-dropdown'
                    onClick={() => setIsShown(true)} ref={ref} >

                    <div>
                        <div className='staff-pages-header-tilte'>Bsc Accountancy - First Year
                            <img 
                                src={down}
                                alt=''
                                className='down-icon'
                                title='Add a new class'/>
                        </div> 
                    </div>
                    {isShown && (
                            <ul className='staff-pages-header-dropdown-menu'>
                                <li>Add a class</li>
                                <hr className='nav-tab-hr'/>
                                <li>First Year</li>
                                <hr className='nav-tab-hr'/>
                                <li>Second Year</li>
                                <hr className='nav-tab-hr'/>
                                <li>Third Year</li>
                            </ul> 
                        )}
                </div>
                
                <hr className='staff-page-hr'/>

                <ClassPageTopNavigation />

            </div>
        </div>
    );
}

export default ClassPage;