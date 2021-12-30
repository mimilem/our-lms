import React, {useState} from 'react';

import './studentsProfile.css';

import Header from '../../Components/Header';
import SideNavigation from '../../Components/SideNavigation';

import studentAvatar from '../../../../assets/ThatsMeSalam.jpg'


function StudentsProfile() {

    // Initiate a boolean state to check weither 
    // the bar is toggled.
    const [toggledBar, setToggledBar] = useState(false);

    return (
        <div className='staff-Studentprofile-container'>
            
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
                    setToggledBar={setToggledBar} />
            </div> 

            <div className='staff-Studentprofile-content'>

                <div className='studentAvatar-container'>
                    <img 
                        src={studentAvatar}
                        alt=''
                        className='studentAvatar'/>
                </div>

                <div className='personnal-information-container'>
                    <div className='personnal-information-text'>
                        Personnal Information
                    </div>

                    <div className='personnal-information-details'>
                        <div><b>ID Number:</b> O00083509<br/></div>
                        <div><b>Surname:</b> SALAM<br/> </div>
                        <div><b>Firstname:</b> Nephthali<br/></div>
                        <div><b>Middle name:</b> Roselyn<br/></div>
                        <div><b>Gender:</b> Male<br/></div>
                        <div><b>Date of birth:</b> 28/10/1999<br/></div>
                        <div><b>Nationality:</b> Central African<br/></div>
                        <div><b>Address:</b> 185 ARKANSAS AVENUE, JOHANNESBURG 2001 SOUTH AFRICA<br/></div>
                        <div><b>Contact Number:</b> +27 (0)67 791 9267<br/></div>
                        <div><b>Email:</b> snephthali@gmail.com<br/></div>
                    </div>
                </div>
                    <br/>
                    <hr className='staff-page-hr'/>
                <div className='personnal-information-container'>
                    <div className='personnal-information-text'>
                        Emergency Contact
                    </div>

                    <div className='personnal-information-details'>
                        <div><b>Surname:</b> SALAM<br/> </div>
                        <div><b>Firstname:</b> Ruben<br/></div>
                        <div><b>Contact Number:</b> +27 (0)67 791 9267<br/></div>
                        <div><b>Email:</b><br/></div>
                    </div>
                </div>
                    <br/>
                    <hr className='staff-page-hr'/>
                <div className='personnal-information-container'>
                    <div className='personnal-information-text'>
                        Accademic Information
                    </div>

                    <div className='personnal-information-details'>
                        <div>
                            <b>Grade:</b> 12<br/>
                            <b>Status:</b> Active<br/> 
                        </div>
                        <div>
                            <b>Subjects: (4) <br/></b>
                             • Maths<br/>
                             • Physics<br/>
                             • French<br/>
                             • Biology<br/>
                        </div>
                        <div>
                            <b>Reports:</b> <br/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default StudentsProfile;