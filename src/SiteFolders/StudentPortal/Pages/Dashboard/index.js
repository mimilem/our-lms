import React, {useState} from 'react';

//import the styling compnent(s).
import './dashboard.css';
import '../studentsPages.css';

//import all components that will be 
//displayed on the pages.
import Header from '../../Components/Header';
import SideNavigation from '../../Components/SideNavigation';
import DashboardProfife from './Components/Profile';
import QuikLinks from './Components/QuikLinks';



function StudentsDashboard() {

    // Initiate a boolean state to check weither 
    // the bar is toggled.
    const [toggledBar, setToggledBar] = useState(false);
    const [activeTab, setActiveTab] = useState('dashboard');

    return (
        <div className="students-pages-container">

            <Header />

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
                    activeTab={activeTab}/>
            </div>

            <div className='students-pages-content'>
                <div className='students-pages-header-tilte'>Students Dashboard</div>
                <hr className='students-page-hr'/>
                <DashboardProfife />
                <QuikLinks />
            </div>
        </div>
    );
}

export default StudentsDashboard;