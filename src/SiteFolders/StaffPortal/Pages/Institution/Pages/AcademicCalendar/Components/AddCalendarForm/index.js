import React from 'react';

import './addCalendarForm.css';


function AddCalendarForm({showAddCalendar, setShowAddCalendar}) {
    return (
        showAddCalendar && (
            <div className='addCalendarForm-container'>
                <div className='addCalendarForm'>
                    <div className='addCalendar-title'>Add a document</div>

                    <div className='addCalendar-inputs'>
                        <input
                            className='addCalendar-input' 
                            placeholder='Academic Year'/>
                        <input
                            className='addFile-input' 
                            type='file'/>
                    </div>
                    <div className='addCalendar-btns'>
                        <button onClick={() => setShowAddCalendar(false)} className='addCalendar-save-btn'>Save</button>
                        <button onClick={() => setShowAddCalendar(false)} className='addCalendar-cancel-btn'>Cancel</button>
                    </div>
                </div>
            </div>
        )
    );
}

export default AddCalendarForm;