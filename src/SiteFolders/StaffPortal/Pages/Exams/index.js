import React, {useState} from 'react';
import { Link } from 'react-router-dom';

//import the styling compnent(s).
import './exams.css';
import '../staffPages.css';

//import all components that will be 
//displayed on the pages.
import Header from '../../Components/Header';
import SideNavigation from '../../Components/SideNavigation';
import HeaderAndSideNav from '../../Components/HeaderAndSideNav';


function ExamsPage() {

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(false);
    const [activeTab, setActiveTab] = useState('exams');
    
    return (
        <div className='staff-pages-container'>
            
            <HeaderAndSideNav 
                toggledBar={toggledBar} 
                setToggledBar={setToggledBar}
                activeTab={activeTab} />

            <div className='staff-pages-content'>
                <div className='staff-pages-header-tilte'>Exams</div>
                
                <hr className='staff-page-hr' />
                
                <Link to='/Staff/Exams/Calendar' className='exams-calendar-tilte'>
                    Access the exams calendar <div className='access'>→</div>
                </Link>

                <div className='exams-classes-container'>
                    <div className='exams-classes-tilte'>Select a class </div>
                    
                    <div style={{position: 'relative', padding: 15, float:'right'}}>
                        <div className='search-class-container'>
                            <input
                                type='text'
                                placeholder='Search a class'
                                className='search-class'
                            />
                        </div>
                    </div>
    
                    <div className='class-list-container'>
                        <Link to='/Staff/Exams/Subject' className="exams-class-card">
                            <div className='bgimage-exam-class-card'/>
                            <div className='exam-class-card-text'>Grade 5</div>
                        </Link>
                        <div className="exam-class-card-container6">
                            <div className='bgimage-exam-class-card'/>
                            <div className='exam-class-card-text'>Grade 6</div>
                        </div>
                        <div className="exams-class-card">
                            <div className='bgimage-exam-class-card'/>
                            <div className='exam-class-card-text'>Grade 7</div>
                        </div>
                        <div className="exam-class-card-container6">
                            <div className='bgimage-exam-class-card'/>
                            <div className='exam-class-card-text'>Grade 8</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ExamsPage;