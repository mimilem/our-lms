
// This is the My Work page component 
//of the student portal.

import React, { useState }  from 'react';

import Select from 'react-select';

// react-circular-progressbar
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Import the styling compnent(s).
import './myWork.css';
import '../studentsPages.css';

// Import all components that will be 
//displayed on the pages.
import Header from '../../Components/Header';
import SideNavigation from '../../Components/SideNavigation';


function MyWorks({item}) {

    // Initiate a boolean state to check weither 
    //the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(false);
    const [activeTab, setActiveTab] = useState('myWork');

    const marksData = [
        {
          value: 'Programming 511',
          mark: 52
        },
        {
          value: 'Network 511',
          mark: 60
        },
        {
          value: 'Data science 511',
          mark: 48
        },
        {
          value: 'Acounting 511',
          mark: 70
        },
    ]

    // List of courses of the select course dropdown.
    const data = [
        {
          value: 1,
          label: "Semester 1"
        },
        {
          value: 2,
          label: "Semester 2"
        },
    ]
    const [selectedOption, setSelectedOption] = useState(null);

    // handle onChange event of the dropdown
    const handleChange = e => {
        setSelectedOption(e);
    }

    // Calculate the sum of all marks and divide it by the length of all added marks 
    //to find the average mark in percentage.
    let averageMarksPercentage =  marksData.reduce((acc, el) => acc + el.mark, 0) / marksData.length

    return (
        
        <div className='students-pages-container'>
            
            <Header />
            
            {/* Set conditions to display the full or toggle side navigation */}
            <div 
                className={
                    toggledBar === false ? 
                        'full-side-navigation-container' 
                        : 
                        'toggled-side-navigation-container' 
                }>
                <SideNavigation 
                    toggledBar={toggledBar} 
                    setToggledBar={setToggledBar} 
                    activeTab={activeTab} />
            </div>

            <div className='students-pages-content'>

                <div className='students-pages-header-tilte'>My Work</div>
                <hr className='students-page-hr' />

                {/* Period selection to display page content  */}
                <div className="choose-tab-element">
                    <Select
                        placeholder="Select a period"
                        value={selectedOption} // set selected value
                        options={data} // set list of the data
                        onChange={handleChange} // assign onChange function
                    />
                </div>  

                <div className='myWork-page-content'>
                    <div className='class-top-navigation-container'>
                        {/* Top navigation list */}
                        <div className="class-top-navigation-tab-element">
                            Average mark
                        </div>
                    </div>

                    {/* Circular progress bar showing total average marks */}
                    <div title={`${averageMarksPercentage.toFixed(1)}% / 100%`}>
                        <CircularProgressbar 
                            value={averageMarksPercentage} 
                            text={` ${averageMarksPercentage.toFixed(1)} %`} 
                            maxValue={100}
                            minValue={0}
                            className='marks-percentage' 
                            styles={
                                buildStyles({ 
                                    rotation: 1, 
                                    strokeLinecap: 'round',
                                    pathTransitionDuration:1,
                                    textColor: averageMarksPercentage.toFixed(1) <= 49.9 ? '#f88' : 'green',
                                    trailColor: '#d6d6d6',
                                    pathColor:averageMarksPercentage.toFixed(1) <= 49.9 ? 
                                        `rgba(255, 0, 0, ${averageMarksPercentage / 100})`
                                        : 
                                        `rgba(0, 128, 0, ${averageMarksPercentage / 100})`
                                })
                            }
                        />
                        <div className='text-value-container'>
                            <div title='4 module(s) passed' className='text-value'>Passed: 4</div>
                            <div title='0 module(s) failed' className='text-value'>Failed: 0</div>
                        </div>
                    </div>

                    <hr className='students-page-hr' />

                    <div className='marks-details-title'>
                        <div className='myWork-subject-title'>Subjects</div>
                        <div className='myWork-subject-title'>Marks</div>
                    </div>

                    {
                        marksData.map((item) => (
                            <div className='subjects-and-marks-content'>
                                <div className='myWork-subject-text'>{item.value}</div>
                                <div className='myWork-mark-text'>{item.mark}%</div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
}

export default MyWorks;