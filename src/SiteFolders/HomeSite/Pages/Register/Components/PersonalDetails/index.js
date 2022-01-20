import React from 'react';

import '../../register-page.css'; 


function PersonalDetails(props) {
    return (
        <div>
            <div className='disabled-dark-horizontal-bar'>
                Personal details
            </div>
            <br />
            <div style={{marginTop:'50px', marginBottom:'50px'}}>
                <div className='register-label'>
                    <input 
                        placeholder='First Name'
                        className='register-input'
                    />
                </div>
                <div className='register-label'>
                    <input 
                        placeholder='Middle Name'
                        className='register-input'
                    />
                </div>
                <div className='register-label'>
                    <input 
                        placeholder='Last Name'
                        className='register-input'
                    />
                </div>
            </div>
            
            <hr className='students-page-hr'/>

            <div style={{marginTop:'50px', marginBottom:'50px'}}>
                <div className='register-label'>
                    <input 
                        placeholder='Id / Passport Number'
                        className='register-input'
                    />
                </div>
                <div className='register-label'>
                    <input 
                        placeholder='Nationality'
                        className='register-input'
                    />
                </div>
                <div className='register-label'>
                    <input 
                        placeholder='Date of Birth'
                        className='register-input'
                    />
                </div>
                <div className='register-label'>
                    <input 
                        placeholder='Place of Birth'
                        className='register-input'
                    />
                </div>
            </div>

            <hr className='students-page-hr'/>

            <div style={{marginTop:'50px', marginBottom:'50px'}}>
                <div className='register-label'>
                    <input 
                        placeholder='Email Adress'
                        className='register-input'
                    />
                </div>
                <div className='register-label'>
                    <input 
                        placeholder='Phone Number'
                        className='register-input'
                    />
                </div>
            </div>

            <hr className='students-page-hr'/>

            <div style={{marginTop:'50px', marginBottom:'50px'}}>
                <div className='register-label'>
                    <input 
                        placeholder='Street Adress'
                        className='register-input'
                    />
                </div>
                <div className='register-label'>
                    <input 
                        placeholder='City'
                        className='register-input'
                    />
                </div>
                <div className='register-label'>
                    <input 
                        placeholder='Country'
                        className='register-input'
                    />
                </div>
                <div className='register-label'>
                    <input 
                        placeholder='Postal Code'
                        className='register-input'
                    />
                </div>
            </div>

            <button className='btn-register-next'>Save And Continue</button>

        </div>
    );
}

export default PersonalDetails;