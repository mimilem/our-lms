
// This is the Time Table page component 
//of the student portal.

import React, {useEffect, useState}  from 'react';

import Select from 'react-select';

// Time table

// Import the styling compnent(s).
import '../studentsPages.css';

// Import all components that will be 
//displayed on the pages.
import Header from '../../Components/Header';
import SideNavigation from '../../Components/SideNavigation';


function StudentTimeTable() {

    // Initiate a boolean state to check weither 
    //the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(true);
    const [activeTab, setActiveTab] = useState('timeTable');

    const subjects = [
        {
          label: 'Programming 511',
          value: 1
        },
        {
          label: 'Network 511',
          value: 2
        },
        {
          label: 'Data science 511',
          value: 3
        },
        {
          label: 'Acounting 511',
          value: 4
        },
    ]
    const [selectedOption, setSelectedOption] = useState(null);

    // handle onChange event of the dropdown
    const handleChange = e => {
        setSelectedOption(e);
    }

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

                <div className='students-pages-header-tilte'>Time Table</div>
                <hr className='students-page-hr' />

                {/* Period selection to display page content  */}
                <div className="choose-tab-element">
                    <Select
                        placeholder="Filter by subject"
                        value={selectedOption} // set selected value
                        options={subjects} // set list of the data
                        onChange={handleChange} // assign onChange function
                    />
                </div>

                <div className='timeTable-container'>
                    <h1>In Progress</h1>
                </div>
            </div>
        </div>
    );
}

export default StudentTimeTable;