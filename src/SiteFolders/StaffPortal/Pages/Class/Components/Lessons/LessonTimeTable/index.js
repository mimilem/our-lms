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

import './lessonTimeTable.css';


function LessonTimeTable() {

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
        <div className='lessonTimeTable-container'>
            <ScheduleComponent currentView='WorkWeek' selectedDate={new Date(2022, 1, 6)} eventSettings={{ dataSource: lessonTimeTableData }} >
                <Inject services={[Day, WorkWeek]} />
                <ViewsDirective>
                    <ViewDirective option='WorkWeek' startHour='8:00' endHour='18:00'/>
                </ViewsDirective>
            </ScheduleComponent>
        </div>
    );
}

export default LessonTimeTable;