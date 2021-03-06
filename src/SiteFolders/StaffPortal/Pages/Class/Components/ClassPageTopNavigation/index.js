import React from 'react';
import { Link } from 'react-router-dom';

//import the styling compnent(s).
import './classPageTopNavigation.css'


function ClassPageTopNavigation({ 
    tabContent, 
    chosedModule, 
    qualificationDetails,
    moduleDetails,
    campusId
}) {
        
    return (
        <div className='class-top-navigation-container'>

            {/* Tab navigation list */}
            <Link
                to={{     
                    pathname:'/Staff/Departments/Courses',
                    state: {qualificationDetails, moduleDetails, campusId}
                }}>
                <div 
                    className={
                        tabContent === 'modules' ? 
                        "active-class-top-navigation-tab-element" 
                        : 
                        "class-top-navigation-tab-element"
                    } style={{fontSize: '17px'}}>
                    Courses
                </div>
            </Link>
                
            {
                chosedModule === false ? 
                <>
                    <div className="dis-class-top-navigation-tab-element">
                     Modules
                    </div>
                    <div className="dis-class-top-navigation-tab-element">
                        Students
                    </div>
                    <div className="dis-class-top-navigation-tab-element">
                        Time Table
                    </div>
                    <div className="dis-class-top-navigation-tab-element">
                        Exams
                    </div>
                    <div className="dis-class-top-navigation-tab-element">
                        Reports
                    </div>
                    {/* <div className="dis-class-top-navigation-tab-element">
                        Discussion
                    </div> */}
                </>
                :
                <>
                    <Link to={{     
                        pathname:'/Staff/Departments/Lessons',
                        state: {qualificationDetails, moduleDetails, campusId}
                    }} >
                        <div 
                            className={
                                tabContent === 'lessons' ? 
                                "active-class-top-navigation-tab-element" 
                                : 
                                "class-top-navigation-tab-element"
                            } style={{fontSize: '17px'}}> 
                            Modules
                        </div>
                    </Link>
                    
                    <Link to={{     
                        pathname:'/Staff/Departments/TimeTable',
                        state: {qualificationDetails, moduleDetails, campusId}
                    }}>
                        <div 
                            className={
                                tabContent === 'timeTable' ? 
                                "active-class-top-navigation-tab-element" 
                                : 
                                "class-top-navigation-tab-element"
                            } style={{fontSize: '17px'}}> 
                            Time Table
                        </div>
                    </Link>

                    
                    <div 
                        className={
                            tabContent === 'exams' ? 
                            "active-class-top-navigation-tab-element" 
                            : 
                            "class-top-navigation-tab-element"
                        } style={{fontSize: '17px'}}> 
                        Exams
                    </div>
                    
                    <div 
                        className={
                            tabContent === 'reports' ? 
                            "active-class-top-navigation-tab-element" 
                            : 
                            "class-top-navigation-tab-element"
                        } style={{fontSize: '17px'}}> 
                        Reports
                    </div>
                    
                    <Link to={{     
                        pathname:'/Staff/Departments/Students',
                        state: {qualificationDetails, moduleDetails, campusId}
                    }}>
                        <div 
                            className={
                                tabContent === 'students' ? 
                                "active-class-top-navigation-tab-element" 
                                : 
                                "class-top-navigation-tab-element"
                            } style={{fontSize: '17px'}}> 
                            Students
                        </div>
                    </Link>
                    
                    {/* <Link to={{     
                        pathname:'/Staff/Departments/Discussion',
                        state: {qualificationDetails, moduleDetails}
                    }}>
                        <div 
                            className={
                                tabContent === 'discussion' ? 
                                "active-class-top-navigation-tab-element" 
                                : 
                                "class-top-navigation-tab-element"
                            }>
                            Discussion
                        </div>
                    </Link> */}
                </>
            }
        </div>
    );
}

export default ClassPageTopNavigation;