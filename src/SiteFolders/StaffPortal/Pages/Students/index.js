import React from 'react';
import Header from '../../Components/Header';
import SideNavigation from '../../Components/SideNavigation';
import './students.css'

function Students(props) {
    return (
        <>
            <Header />
            <div className='sideNav-and-window-container'>
                <SideNavigation />
                <div className='students-container'>
                    Display The Students List
                </div>
            </div>
        </>
    );
}

export default Students;