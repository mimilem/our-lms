import React from 'react';
import CalendarCpmnt from '../Calendar';

//import the styling compnent(s).
import './examCalendar.css'


function ExamCalendar() {
    return (
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
                <CalendarCpmnt />
            </div>
        </div>
    );
}

export default ExamCalendar;