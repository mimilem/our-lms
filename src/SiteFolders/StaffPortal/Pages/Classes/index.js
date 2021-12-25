import React from 'react';
import Header from '../../Components/Header';
import SideNavigation from '../../Components/SideNavigation';
import './classes.css'

function ClassesPage(props) {
    return (
        <>
            <Header />
            
            <div className='sideNav-and-window-container'>
                <SideNavigation />
                
                <div className='classes-container'>
                    Display All Classes
                </div>
            </div>
        </>
    );
}

export default ClassesPage;