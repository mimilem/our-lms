import React, {useState} from 'react';

//import the styling compnent(s).
import './calendarPage.css';
import '../staffPages.css';

import Header from '../../Components/Header';
import SideNavigation from '../../Components/SideNavigation';
import StaffExamsCalendar from '../../Components/Calendar';


function CalendarPage() {

    // Initiate a boolean state to check weither 
    // the bar is toggled.
    const [toggledBar, setToggledBar] = useState(false);

    return (
        <div className='staff-pages-container'>

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
            
            <div  className='staff-pages-content'>
                
                <div className='exams-calendar-header-tilte'>Exams Calendar</div>
                <hr/>

                <div className='choose-class-filter'>

                    <div className='exams-calendar-container'>
                        <div className='class-filter-container'>
                            <input  
                                type="checkbox" 
                                className='class-filter-checkbox'/>
                            <div className='class-filter-text'>
                                Show All Classes
                            </div> 
                        </div>

                        <div className='calendar-container'>
                            <StaffExamsCalendar />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CalendarPage;