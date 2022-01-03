import React, {useState} from 'react';

import { useDetectClickOutside } from 'react-detect-click-outside';

//import the styling compnent(s).
import './classes.css';
import '../staffPages.css';

//import all assets.
import addButton from '../../../../assets/plus.png'
import down from '../../../../assets/down.png'

//import all components that will be 
//displayed on the pages.
import ClassesList from '../../Components/ClassesList';
import Header from '../../Components/Header';
import SideNavigation from '../../Components/SideNavigation';


function ClassesPage(props) {

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
                        <div className='staff-pages-header-tilte'>Bsc Accountancy 
                            <img 
                                src={down}
                                alt=''
                                className='down-icon'
                                title='Add a new class'/>
                        </div> 
                    </div>
                    {isShown && (
                            <ul className='staff-pages-header-dropdown-menu'>
                                <li>Business Sciences</li>
                                <hr className='nav-tab-hr'/>
                                <li>Accountancy</li>
                                <hr className='nav-tab-hr'/>
                                <li>Economics and Finance</li>
                                <hr className='nav-tab-hr'/>
                                <li>Law</li>
                            </ul> 
                        )}
                </div>
                <hr className='staff-page-hr'/>

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