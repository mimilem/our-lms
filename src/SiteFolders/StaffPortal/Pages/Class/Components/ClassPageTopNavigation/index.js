import React, {useState} from 'react';

import Select from 'react-select';

import './classPageTopNavigation.css'

import ExamsPage from '../../../Exams';
import SubjectsList from '../SubjectsList';
import StudentsList from '../../../../Components/StudentsList';
import Lessons from '../Lessons';
import Students from '../Students';
import Exams from '../Exams';
import Reports from '../Reports';


function ClassPageTopNavigation() {

    const [tabContent, setTabContent] = useState('subjects')

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
                    Discussion
                </div>
            </div>

            <div>
            {tabContent === 'subjects' ? <SubjectsList />: []}
            {tabContent === 'lessons' ? <Lessons />: []}
            {tabContent === 'students' ? <Students />: []}
            {tabContent === 'timeTable' ? 
                <h1 className='not-available-msg'>Not Yet Available</h1>: []}
            {tabContent === 'exams' ? <Exams />: []}
            {tabContent === 'reports' ? <Reports />: []}
            {tabContent === 'chatRoom' ? 
                <h1 className='not-available-msg'>Not Yet Available</h1>: []}
            </div>
        </div>
    );
}

export default ClassPageTopNavigation;