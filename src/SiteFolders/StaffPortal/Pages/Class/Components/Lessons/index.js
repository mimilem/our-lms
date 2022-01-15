import React from 'react';

import './lessons.css'; 
import '../classComponent.css'


function Lessons() {
    return (
        <div className='class-page-content'>
            <div className='title'>Financial Accounting</div>

            <div className='chapter-semester-container'>
                <div className='first-subtitle'>First Semester</div>

                <div className="chapter-container">
                    <div to='/Staff/Class' className='exams-calendar-tilte'>
                        Chapter I : Fundamental of accounting
                    </div>
                    <div className='add-a-material'>
                        Add a material <br/>
                        <input type='file'/>
                    </div>
                    <div className='add-a-material'>
                        Add a test document<br/>
                        <input type='file'/>
                    </div>
                    <div to='/Staff/Class' className='exams-calendar-tilte'>
                        Chapter II : Fundamental of accounting
                    </div>
                    <div className='add-a-material'>
                        Add a material<br/>
                        <input type='file'/>
                    </div>
                    <div className='add-a-material'>
                        Add a test document<br/>
                        <input type='file'/>
                    </div>
                    <div to='/Staff/Class' className='exams-calendar-tilte'>
                        Chapter III : Fundamental of accounting
                    </div>
                    <div className='add-a-material'>
                        Add a material<br/>
                        <input type='file'/>
                    </div>
                    <div className='add-a-material'>
                        Add a test document<br/>
                        <input type='file'/>
                    </div>
                </div>
            </div> 
            <div className='chapter-semester-container'>
                <div className='first-subtitle'>Second Semester</div>

                <div className="chapter-container">
                    <div to='/Staff/Class' className='exams-calendar-tilte'>
                        Chapter I : Fundamental of accounting
                    </div>
                    <div className='add-a-material'>
                        Add a material<br/>
                        <input type='file'/>
                    </div>
                    <div className='add-a-material'>
                        Add a test document<br/>
                        <input type='file'/>
                    </div>
                    <div to='/Staff/Class' className='exams-calendar-tilte'>
                        Chapter II : Fundamental of accounting
                    </div>
                    <div className='add-a-material'>
                        Add a material<br/>
                        <input type='file'/>
                    </div>
                    <div className='add-a-material'>
                        Add a test document<br/>
                        <input type='file'/>
                    </div>
                    <div to='/Staff/Class' className='exams-calendar-tilte'>
                        Chapter III : Fundamental of accounting
                    </div>
                    <div className='add-a-material'>
                        Add a material<br/>
                        <input type='file'/>
                    </div>
                    <div className='add-a-material'>
                        Add a test document<br/>
                        <input type='file'/>
                    </div>
                </div>
            </div> 
            
        </div>
    );
}

export default Lessons;