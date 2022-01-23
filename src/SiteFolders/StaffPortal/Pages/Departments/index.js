import React, { useState } from 'react';

// 'useLocation' to receive parameters through the 
// react-dom-router Link. From the Full and Toggled Navigation.
import { useLocation } from 'react-router-dom';

// Import the amplify API and components to handle the 
// requests.
import { API } from "aws-amplify";
import * as mutations from '../../../../graphql/mutations';

//import the styling compnent(s).
import './departments.css';
import '../staffPages.css';

//import all components that will be 
//displayed on the pages.
import DepartmentsList from '../../Components/DepartmentsList';
import HeaderAndSideNav from '../../Components/HeaderAndSideNav';


function DepartmentsPage() {

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(false);
    const [activeTab, setActiveTab] = useState('department');

    // State to keep and update the input value when the admin create the faculty name.
    const [facultyNameInputValue, setFacultyNameInputValue] = useState('')

    // Initial state to display the pop-out screens. 
    const [showCreateDepartment, setShowCreateDepartment] = useState(false)
    const [showCreateCourse, setShowCreateCourse] = useState(false)

    let location = useLocation()
    let locationCampusDetails = {
        locationCampusID: location.state.campusID
    }

    // This Function is used to create a new faculty
    // then reload the page.
    const createNewFaculty = async () => {
            const facultyDetails = {
                facultyName: facultyNameInputValue,
                campusID: locationCampusDetails.locationCampusID
            };
            const newFaculty = await API.graphql({ 
                query: mutations.createFaculty, 
                variables: {input: facultyDetails}
            });
            window.location.reload(false);
    }

    return (
        <div className="staff-pages-container">

            <HeaderAndSideNav
                toggledBar={toggledBar} 
                setToggledBar={setToggledBar}
                activeTab={activeTab} /> 

            <div className='staff-pages-content'>
                <div className='staff-pages-header-tilte'>Faculties and Schools</div>
                <hr className='staff-page-hr'/>

                <DepartmentsList 
                    setShowCreateDepartment={setShowCreateDepartment}
                    locationCampusDetails={locationCampusDetails} />

                {/* The Pup-out window that allows the admin to create */}
                {/* a new faculty or school. */}
                {/* By default the display is set to false */}
                <div 
                    className='pop-out-window'
                    style={{ display:showCreateDepartment === false ? 'none' : ''}} >
                        <div className='pop-up-title' >Create a new Faculty</div>
                        <input
                            className='lg-pop-up-input'
                            placeholder='Faculty Name'
                            value={facultyNameInputValue}
                            onChange={e => setFacultyNameInputValue(e.target.value)}
                        />
                        <div 
                            className='close-pop-up-icon' 
                            onClick={ () => setShowCreateDepartment(false)} />
                        <div onClick={ createNewFaculty } className='create-pop-up-button'>Create</div>
                </div>

            </div>
        </div>
    );
}

export default DepartmentsPage;