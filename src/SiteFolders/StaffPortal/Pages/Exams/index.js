import React from 'react';
import Header from '../../Components/Header';
import SideNavigation from '../../Components/SideNavigation';
import './exams.css'

function Exams(props) {
    return (
        <>
            <Header />

            <div className='sideNav-and-window-container'>
                <SideNavigation />

                <div className='exams-container'>
                    Display Exams 
                </div>
            </div>
        </>
    );
}

export default Exams;