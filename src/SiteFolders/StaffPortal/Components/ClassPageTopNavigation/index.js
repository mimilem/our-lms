import React from 'react';

import './classPageTopNavigation.css'


function ClassPageTopNavigation() {
    return (

        <div>      
            <div className="choose-tab-element">
                <div className='choose-text'>Choose a subject :</div>
                <div className="choose-tab-element-dropdown">
                </div>
            </div>  
            <div className='class-top-navigation-container'>

                {/* Tab navigation list */}
                <div className="class-top-navigation-tab-element">
                    Subjects
                </div>
                <div className="disabled-class-top-navigation-tab-element">
                    lessons
                </div>
                <div className="class-top-navigation-tab-element">
                    Students
                </div>
                <div className="class-top-navigation-tab-element">
                    Time Table
                </div>
                <div className="class-top-navigation-tab-element">
                    Exams
                </div>
                
            </div>
        </div>
    );
}

export default ClassPageTopNavigation;