import React, { useEffect, useState } from 'react';

import './library.css';


import SideNavigation from '../../Components/SideNavigation';
import HeaderAndSideNav from '../../../../Components/HeaderAndSideNav';


function Library(props) {

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(false);
    const [activeTab, setActiveTab] = useState('library');
    const [choosedCampus, setChoosedCampus] = useState(false);

    const [generalToggledBar, setGeneralToggledBar] = useState(false);

    //automatically scroll to top
    useEffect(() => { 
        window.scrollTo(0,0);
    }, []);

    return (
        <div className="campus-page-content">

            <HeaderAndSideNav
                toggledBar={toggledBar} 
                setToggledBar={setToggledBar}
                activeTab={activeTab}
                choosedCampus={choosedCampus} />

            <SideNavigation 
                generalToggledBar={generalToggledBar} 
                setGeneralToggledBar={setGeneralToggledBar}
                activeTab={activeTab} />

            <div className="library-content"> 
                <div 
                    className='staff-pages-header-tilte' 
                    style={{marginLeft: '3rem'}} >
                    Library
                </div>
                <hr className='staff-page-hr' />

                <div style={{display: 'flex', marginLeft: '4rem'}}>
                    <input
                        type='file'
                        className='upload-accCalendar-file' />
                    <button
                        className='accCalendar-file-btn'>
                            Upload
                    </button>
                </div>
                <div className='library-search-container'>
                    <input
                        placeholder='Search a document'
                        className='library-search' 
                        type='search' autoFocus />
                    <div className='library-search-icon'/>
                </div>
            </div>
            
        </div>
    );
}

export default Library;