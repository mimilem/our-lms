import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import Select from 'react-select';

import './classPageTopNavigation.css'

import ExamsPage from '../../../Exams';
import ModulesList from '../ModulesList';
import StudentsList from '../../../../Components/StudentsList';
import Lessons from '../Lessons';
import Students from '../ClassStudents';
import Exams from '../Exams';
import Reports from '../Reports';


function ClassPageTopNavigation({ departmentDetails, tabContent, chosedModule, moduleDetails }) {

    const data = [
        {
          value: 1,
          label: "Financial Accounting"
        },
        {
          value: 2,
          label: "Accounting Information Systems"
        },
        {
            value: 3,
            label: "Economics IA (Microeconomics)"
        },
        {
          value: 4,
          label: "Economics IB (Macroeconomics)"
        },
        {
          value: 5,
          label: "Commercial Law I"
        },
        {
          value: 6,
          label: "Computational Mathematics I"
        },
        {
          value: 7,
          label: "Business Statistics I"
        },
    ]
    const [selectedOption, setSelectedOption] = useState(null);

    // handle onChange event of the dropdown
    const handleChange = e => {
        setSelectedOption(e);
    }
        
    return (
        <>
            <div className="choose-tab-element">
                <Select
                    placeholder="Choose a subject"
                    value={selectedOption} // set selected value
                    options={data} // set list of the data
                    onChange={handleChange} // assign onChange function
                />
            </div>  

            <div className='class-top-navigation-container'>

                {/* Tab navigation list */}
                <Link
                    to={{     
                        pathname:'/Staff/Departments/ModulesList',
                        state: departmentDetails
                    }}>
                    <div 
                        className={
                            tabContent === 'modules' ? 
                            "active-class-top-navigation-tab-element" 
                            : 
                            "class-top-navigation-tab-element"
                        }>
                        Modules
                    </div>
                </Link>
                    
                {
                    chosedModule === false ? 
                    <>
                        <div className="dis-class-top-navigation-tab-element">
                            Chapters
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
                        <div className="dis-class-top-navigation-tab-element">
                            Discussion
                        </div>
                    </>
                    :
                    <>
                        <Link to={{     
                            pathname:'/Staff/Departments/Lessons',
                            state: {departmentDetails, moduleDetails}
                        }} >
                            <div 
                                className={
                                    tabContent === 'lessons' ? 
                                    "active-class-top-navigation-tab-element" 
                                    : 
                                    "class-top-navigation-tab-element"
                                }>
                                Chapters
                            </div>
                        </Link>
                        
                        <Link to={{     
                            pathname:'/Staff/Departments/TimeTable',
                            state: departmentDetails
                        }}>
                            <div 
                                className={
                                    tabContent === 'timeTable' ? 
                                    "active-class-top-navigation-tab-element" 
                                    : 
                                    "class-top-navigation-tab-element"
                                }>
                                Time Table
                            </div>
                        </Link>

                        
                        <div 
                            className={
                                tabContent === 'exams' ? 
                                "active-class-top-navigation-tab-element" 
                                : 
                                "class-top-navigation-tab-element"
                            }>
                            Exams
                        </div>
                        
                        <div 
                            className={
                                tabContent === 'reports' ? 
                                "active-class-top-navigation-tab-element" 
                                : 
                                "class-top-navigation-tab-element"
                            }>
                            Reports
                        </div>
                        
                        <Link to={{     
                            pathname:'/Staff/Departments/Students',
                            state: {departmentDetails, moduleDetails}
                        }}>
                            <div 
                                className={
                                    tabContent === 'students' ? 
                                    "active-class-top-navigation-tab-element" 
                                    : 
                                    "class-top-navigation-tab-element"
                                }>
                                Students
                            </div>
                        </Link>
                        
                        <div 
                            className={
                                tabContent === 'chatRoom' ? 
                                "active-class-top-navigation-tab-element" 
                                : 
                                "class-top-navigation-tab-element"
                            }>
                            Discussion
                        </div>
                    </>
                }
            </div>
        </>
        
    );
}

export default ClassPageTopNavigation;