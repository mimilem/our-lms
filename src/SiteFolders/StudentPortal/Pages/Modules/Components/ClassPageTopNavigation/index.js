import React, {useState} from 'react';

import Select from 'react-select';

import './classPageTopNavigation.css'

import Lessons from '../Lessons'
import Students from '../Students';


function ClassPageTopNavigation() {

    const [tabContent, setTabContent] = useState('lessons')

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
                {/* <input 
                    className="choose-tab-element-dropdown" 
                    placeholder='Choose a subject'/> */}
            </div>  
            <div className='class-top-navigation-container'>

                {/* Tab navigation list */}
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
                        tabContent === 'chatRoom' ? 
                        "active-class-top-navigation-tab-element" 
                        : 
                        "class-top-navigation-tab-element"
                    }
                    onClick={()=> setTabContent('chatRoom')}
                >
                    Chat Room
                </div>
            </div>

            <div>
            {tabContent === 'lessons' ? <Lessons />: []}
            {tabContent === 'students' ? <Students />: []}
            {tabContent === 'timeTable' ? 'time table biches': []}
            {tabContent === 'exams' ? 'that': []}
            {tabContent === 'reports' ? '<Reports />': []}
            {tabContent === 'chatRoom' ? 'chatRoom biches': []}
            </div>
        </div>
    );
}

export default ClassPageTopNavigation;