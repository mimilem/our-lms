import React, { useState } from 'react';

import './lessonTabNav.css';

import LessonDiscussion from '../LessonDiscussion';
import LessonMaterial from '../LessonMaterial';
import LessonTimeTable from '../LessonTimeTable';


function LessonTabNav(props) {

    const [activeTab, setActiveTab] = useState('Material');

    return (
        <>
            <div className='lesson-dashboard-title'>
                <b style={{marginRight: 5}}>Lesson: </b> Introduction to Structure Material   
            </div> 
            <div className='lesson-top-navigation-container'>

                <div 
                    onClick={() => setActiveTab('Material')}
                    className={
                        activeTab==="Material" ? 
                        "active-lesson-top-navigation-element" : 
                        "lesson-top-navigation-element"}>
                    Material
                </div>
                <div 
                    onClick={() => setActiveTab('TimeTable')}
                    className={
                        activeTab==="TimeTable" ? 
                        "active-lesson-top-navigation-element" : 
                        "lesson-top-navigation-element"}>
                    Time Table
                </div>
                <div 
                    onClick={() => setActiveTab('Discussion')}
                    className={
                        activeTab==="Discussion" ? 
                        "active-lesson-top-navigation-element" : 
                        "lesson-top-navigation-element"}>
                    Discussion
                </div>
            </div>

            <div>
                { activeTab === 'Material' ? 
                    <LessonMaterial /> : [] }
                { activeTab === 'TimeTable' ? 
                    <LessonTimeTable /> : [] }
                { activeTab === 'Discussion' ? 
                    <LessonDiscussion setActiveTab={setActiveTab} /> : [] }
            </div>
        </>
    );
}

export default LessonTabNav;