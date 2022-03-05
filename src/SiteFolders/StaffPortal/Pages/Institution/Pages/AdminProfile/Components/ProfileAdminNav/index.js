import React, { useState, useEffect } from 'react';

import { Auth } from "aws-amplify";

import './profileAdminNav.css'


function ProfileAdminNav(props) {

    const [error, setError] = useState(null);
    const [currentUsername, setCurrentUsername] = useState('');
    const [currentName, setCurrentName] = useState('');
    const [currentFamilyName, setCurrentFamilyName] = useState('');
    const [currentPhoneNumber, setCurrentPhoneNumber] = useState('');
    const [currentEmail, setCurrentEmail] = useState('');
    
    useEffect(() => {
        try {
          setError(null);
    
          Auth.currentAuthenticatedUser({
            bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
          }).then(user => {
            setCurrentUsername(user.username);
            setCurrentName(user.attributes.name);
            setCurrentFamilyName(user.attributes.family_name);
            setCurrentPhoneNumber(user.attributes.phone_number);
            setCurrentEmail(user.attributes.email);
            // TBD
          }).catch(err => setError(err));
        }
        catch (e) {
          setError(e);
        }
      }, []);

      
      async function updateUser() {
        let user = await Auth.currentAuthenticatedUser();
        
        let updateUser = await Auth.updateUserAttributes( user, {

            email: currentEmail,
            name: currentName,
            family_name: currentFamilyName,
            phone_number: currentPhoneNumber,
            
        })
        window.location.reload(false);
    }

    return (
        <div className="profileAdminNav-container">
            <div className="profileAdminNav-input-container">
                <div className="profileAdminNav-label">Username:</div> 
                <input 
                    className="profileAdminNav-input"
                    value={currentUsername}
                    onChange={e => setCurrentUsername(e.target.value)}/>
            </div>
            <div className="profileAdminNav-input-container">
                <div className="profileAdminNav-label">Full Name:</div> 
                <input 
                    className="profileAdminNav-input"
                    value={currentName}
                    onChange={e => setCurrentName(e.target.value)}/>
            </div>
            <div className="profileAdminNav-input-container">
                <div className="profileAdminNav-label">Family Name:</div> 
                <input 
                    className="profileAdminNav-input"
                    value={currentFamilyName}/>
            </div>
            <div className="profileAdminNav-input-container">
                <div className="profileAdminNav-label">Role: </div> 
                <input 
                    className="profileAdminNav-input"/>
            </div>
            <div className="profileAdminNav-input-container">
                <div className="profileAdminNav-label">Email: </div> 
                <input 
                    className="profileAdminNav-input"
                    value={currentEmail}/>
            </div>
            <div className="profileAdminNav-input-container">
                <div className="profileAdminNav-label">Phone: </div> 
                <input 
                    className="profileAdminNav-input"
                    value={currentPhoneNumber}/>
            </div>
            <div className="profileAdminNav-input-container">
                <div className="profileAdminNav-label">Password: </div> 
                <input 
                    className="profileAdminNav-input"/>
            </div>

            <div className="btn-profileAdminNav-container">
                <button 
                    className='btn-profileAdminNav-cancel'>
                        Cancel
                </button>
                <button 
                    className='btn-profileAdminNav-Save' 
                    onClick={updateUser}>
                        Save
                </button>
            </div>
        </div>
    );
}

export default ProfileAdminNav;