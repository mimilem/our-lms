import React, { useState } from 'react';

// Time table
import { 
    Inject, 
    ScheduleComponent, 
    Day, 
    WorkWeek, 
    ViewsDirective, 
    ViewDirective
} from '@syncfusion/ej2-react-schedule';

//import the styling compnent(s).
import './timeTable.css';
import '../staffPages.css';

//import all components that will be 
//displayed on the pages.
import HeaderAndSideNav from '../../Components/HeaderAndSideNav';


function TimeTablePage() {

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(false);
    const [activeTab, setActiveTab] = useState('timeTable');

    const [lessonTimeTableData, setlessonTimeTableData] = useState([{
        Id: 1,
        Subject: 'Explosion of Betelgeuse Star',
        StartTime: new Date(2022, 1, 8, 9, 30),
        EndTime: new Date(2022, 1, 8, 11, 0)
    }, {
        Id: 2,
        Subject: 'Thule Air Crash Report',
        StartTime: new Date(2022, 1, 9, 12, 0),
        EndTime: new Date(2022, 1, 9, 14, 0)
    }])

    return (
        <div className='staff-pages-container'>
            
            <HeaderAndSideNav 
                toggledBar={toggledBar} 
                setToggledBar={setToggledBar}
                activeTab={activeTab} />

            <div className='staff-pages-content'>
                <div className='staff-pages-header-tilte'>Time Table</div>
                
                <hr className='staff-page-hr' />

                <div>
                    <ScheduleComponent currentView='WorkWeek'
                        eventSettings={{ dataSource: lessonTimeTableData }} >
                        <Inject services={[Day, WorkWeek]} />
                        <ViewsDirective>
                            <ViewDirective option='WorkWeek' startHour='8:00' endHour='18:00'/>
                        </ViewsDirective>
                    </ScheduleComponent>
                </div>
            
            </div>
        </div>
    );
}

export default TimeTablePage;