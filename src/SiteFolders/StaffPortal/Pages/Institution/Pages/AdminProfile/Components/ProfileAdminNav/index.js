import React from 'react';

import './profileAdminNav.css'


function ProfileAdminNav(props) {
    return (
        <div className="profileAdminNav-container">
            <div className="profileAdminNav-input-container">
                <div className="profileAdminNav-label">Full Name: </div> 
                <input 
                    className="profileAdminNav-input"/>
            </div>
            <div className="profileAdminNav-input-container">
                <div className="profileAdminNav-label">Role: </div> 
                <input 
                    className="profileAdminNav-input"/>
            </div>
            <div className="profileAdminNav-input-container">
                <div className="profileAdminNav-label">Email: </div> 
                <input 
                    className="profileAdminNav-input"/>
            </div>
            <div className="profileAdminNav-input-container">
                <div className="profileAdminNav-label">Phone: </div> 
                <input 
                    className="profileAdminNav-input"/>
            </div>
            <div className="profileAdminNav-input-container">
                <div className="profileAdminNav-label">Password: </div> 
                <input 
                    className="profileAdminNav-input"/>
            </div>

            <div className="btn-profileAdminNav-container">
                <button className='btn-profileAdminNav-cancel'>Cancel</button>
                <button className='btn-profileAdminNav-Save'>Save</button>
            </div>
        </div>
    );
}

export default ProfileAdminNav;