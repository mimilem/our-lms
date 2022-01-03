import React, {useState} from 'react';

import './classPageTopNavigation.css'

import SubjectsList from '../SubjectsList';
import StudentsList from '../StudentsList';
import ExamsPage from '../../Pages/Exams';


function ClassPageTopNavigation() {

    const [tabContent, setTabContent] = useState('subjects')

    return (

        <div>      
            <div className="choose-tab-element">
                <div className='choose-text'>Choose a subject :</div>
                <div className="choose-tab-element-dropdown">
                </div>
            </div>  
            <div className='class-top-navigation-container'>

                {/* Tab navigation list */}
                <div 
                    className={
                        tabContent === 'subjects' ? 
                        "active-class-top-navigation-tab-element" 
                        : 
                        "class-top-navigation-tab-element"
                    }
                    onClick={()=> setTabContent('subjects')}>
                    Subjects
                </div>
                <div 
                    className={
                        tabContent === 'lessons' ? 
                        "active-class-top-navigation-tab-element" 
                        : 
                        "class-top-navigation-tab-element"
                    }
                    onClick={()=> setTabContent('lessons')}>
                    lessons
                </div>
                <div 
                    className={
                        tabContent === 'students' ? 
                        "active-class-top-navigation-tab-element" 
                        : 
                        "class-top-navigation-tab-element"
                    }
                    onClick={()=> setTabContent('students')}>
                    Students
                </div>
                <div 
                    className={
                        tabContent === 'timeTable' ? 
                        "active-class-top-navigation-tab-element" 
                        : 
                        "class-top-navigation-tab-element"
                    }
                    onClick={()=> setTabContent('timeTable')}>
                    Time Table
                </div>
                <div 
                    className={
                        tabContent === 'exams' ? 
                        "active-class-top-navigation-tab-element" 
                        : 
                        "class-top-navigation-tab-element"
                    }
                    onClick={()=> setTabContent('exams')}
                >
                    Exams
                </div>
            </div>

            <div>
            {tabContent === 'subjects' ? <SubjectsList />: []}
            {tabContent === 'lessons' ? 'Lessons biches': []}
            {tabContent === 'students' ? <StudentsList/>: []}
            {tabContent === 'timeTable' ? 'time table biches': []}
            {tabContent === 'exams' ? 'exams biches': []}
            </div>
        </div>
    );
}

export default ClassPageTopNavigation;