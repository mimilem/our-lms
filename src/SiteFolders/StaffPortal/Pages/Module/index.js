import React from 'react';
import './module.css'
import Header from '../../Components/Header';
import SideNavigation from '../../Components/SideNavigation';

function Module() {
    return (
        <>
            <Header />

            <div className='sideNav-and-window-container'>
                <SideNavigation />
                
                <div className='module-container'>
                    Display The Module
                </div>
            </div>
        </>
    );
}

export default Module;