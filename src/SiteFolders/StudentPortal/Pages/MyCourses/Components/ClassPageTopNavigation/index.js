
// This is the top navigation of a course compponent 
// of the student portal.

import React, { useState } from 'react';
import Select from 'react-select';

//import the styling compnent(s).
import './classPageTopNavigation.css';

//import all components that will be 
//displayed on the pages.
import Lessons from '../Lessons';
import Students from '../Students';
import Reports from '../Reports';


function ClassPageTopNavigation() {

    //Set the state of the displayed content
    const [tabContent, setTabContent] = useState('lessons')

    //list of courses of the select course dropdown
    const data = [
        {
          value: 1,
          label: "Programming 511"
        },
        {
          value: 2,
          label: "Accounting 511"
        },
        {
            value: 3,
            label: "Network 511"
        },
        {
          value: 4,
          label: "Data Science 511"
        },
    ]
    const [selectedOption, setSelectedOption] = useState(null);

    // handle onChange event of the dropdown
    const handleChange = e => {
        setSelectedOption(e);
    }
        
    return (

        <div>      
            <div className="choose-tab-element">
                <Select
                    placeholder="Choose a subject"
                    value={selectedOption} // set selected value
                    options={data} // set list of the data
                    onChange={handleChange} // assign onChange function
                />
            </div>  

            <div className='class-top-navigation-container'>
                {/* Top navigation list */}
                <div 
                    className={
                        tabContent === 'lessons' ? 
                        "active-class-top-navigation-tab-element" 
                        : 
                        "class-top-navigation-tab-element"
                    }
                    onClick={()=> setTabContent('lessons')}>
                    Lessons
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
                <div 
                    className={
                        tabContent === 'reports' ? 
                        "active-class-top-navigation-tab-element" 
                        : 
                        "class-top-navigation-tab-element"
                    }
                    onClick={()=> setTabContent('reports')}
                >
                    Reports
                </div>
                <div 
                    className={
                        tabContent === 'discussion' ? 
                        "active-class-top-navigation-tab-element" 
                        : 
                        "class-top-navigation-tab-element"
                    }
                    onClick={()=> setTabContent('discussion')}
                >
                    Discussion
                </div>
            </div>

            {/* On change state display the correcponding content */}
            <div>
                {tabContent === 'lessons' ? <Lessons />: []}
                {tabContent === 'students' ? <Students />: []}
                {tabContent === 'timeTable' ? 
                    <h1 className='not-available-msg'>Not Yet Available</h1>: []}
                {tabContent === 'exams' ? 
                    <h1 className='not-available-msg'>Not Yet Available</h1>: []}
                {tabContent === 'reports' ? <Reports />: []}
                {tabContent === 'discussion' ? 
                    <h1 className='not-available-msg'>Not Yet Available</h1>: []}
            </div>
        </div>
    );
}

export default ClassPageTopNavigation;