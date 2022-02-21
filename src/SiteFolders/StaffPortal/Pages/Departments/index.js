import React, { useState, useEffect } from 'react';

// 'useLocation' to receive parameters through the 
// react-dom-router Link. From the Full and Toggled Navigation.
import { useLocation } from 'react-router-dom';

// Import the amplify API and components to handle the 
// requests.
import { API, graphqlOperation } from "aws-amplify";
import * as mutations from '../../../../graphql/mutations';
import { listFacultys, listDepartments, listClasss } from '../../../../graphql/queries';
import awsExports from '../../../../aws-exports';

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
    const [choosedCampus, setChoosedCampus] = useState(true)

    const [faculty, setFaculty] = useState([])
    const [department, setDepartment] = useState([])
    const [qualification, setQualification] = useState([])

    // State to keep and update the input value when the admin create 
    // an instance.
    const [facultyNameInputValue, setFacultyNameInputValue] = useState('')
    const [facultyHead, setFacultyHead] = useState('')
    const [facultyCountry, setFacultyCountry] = useState('')
    const [facultyCity, setFacultyCity] = useState('')
    const [facultyPhoneNumber, setFacultyPhoneNumber] = useState('')
    const [facultyEmail, setFacultyEmail] = useState('')
    const [facultyAddress, setFacultyAddress] = useState('')

    const [departmentNameInputValue, setDepartmentNameInputValue] = useState('')
    
    const [qualificationNameInputValue, setQualificationNameInputValue] = useState('')
    const [qualificationLevelInputValue, setQualificationLevelInputValue] = useState('')
    const [qualificationYearInputValue, setQualificationYearInputValue] = useState('')

    // Initial state to display the pop-out screens. 
    const [showCreateFaculty, setShowCreateFaculty] = useState(false)
    const [showCreateDepartment, setShowCreateDepartment] = useState(false)
    const [showCreateQualification, setShowCreateQualification] = useState(false)

    const [headofDepartmentInputValue, setHeadofDepartmentInputValue] = useState('')

    // Update the state of the faculty and department ID
    const [stateFacultyID, setStateFacultyID] = useState([])
    const [stateDepartmentID, setStateDepartmentID] = useState([])

    const [file, setFile] = useState([]);
    const [fileUrl, setFileUrl] = useState('');
    const [fileName, setFileName] = useState('');

    let location = useLocation()

    let locationCampusDetails = {
        locationCampusID: location.state.campusID
    }

    const campusId = location.state.campusID

    // This Function is used to create a new faculty
    // then reload the page.
    const createNewFaculty = async () => {
        const facultyDetails = {
            facultyName: facultyNameInputValue,
            headofFaculty: facultyHead,
            facultyCountry: facultyCountry,
            facultyCity: facultyCity,
            facultyPhoneNumber: facultyPhoneNumber,
            facultyEmailAddress: facultyEmail,
            facultyAdress: facultyAddress,
            campusID: locationCampusDetails.locationCampusID
        };
        const newFaculty = await API.graphql({ 
            query: mutations.createFaculty, 
            variables: {input: facultyDetails}
        });
        window.location.reload(false);
    }

    // This Function is used to create a new department
    // then reload the page.
    const createNewDepartment = async () => {
        const departmentDetails = {
            departmentName: departmentNameInputValue,
            facultyID: stateFacultyID
        };
        const newDepartment = await API.graphql({ 
            query: mutations.createDepartment, 
            variables: {input: departmentDetails}
        });
        window.location.reload(false);
    }
    
    // This Function is used to create a new qualification
    // then reload the page.
    const createNewQualification = async () => {
        const qualificationDetails = {
            qualificationName: qualificationNameInputValue,
            qualificationLevel: qualificationLevelInputValue,
            qualificationYear: qualificationYearInputValue,
            departmentID: stateDepartmentID,
        };
        const newQualification = await API.graphql({ 
            query: mutations.createClass, 
            variables: {input: qualificationDetails}
        });
        window.location.reload(false);
    }

    /* fetch the API data of faculties and departements */
    useEffect( () => {

        //automatically scroll to top
        window.scrollTo(0,0);

        const fetchFaculty = async () => {
            try {
                //faculties
                const facultyResults = await API.graphql(
                    graphqlOperation(listFacultys)
                )
                let faculty = facultyResults.data.listFacultys.items
                setFaculty(faculty)

                //departements
                const departmentResults = await API.graphql(
                    graphqlOperation(listDepartments)
                )
                const department = departmentResults.data.listDepartments.items
                setDepartment(department)

                //qualification
                const qualificationResults = await API.graphql(
                    graphqlOperation(listClasss)
                )
                const qualification = qualificationResults.data.listClasss.items
                setQualification(qualification)
            } 
            catch (error) {
                console.log(error)
            }
        }
        fetchFaculty();
    }, [])

    async function onChangeHandler(e) {
        
        const file = e.target.files[0];

        setFileUrl(URL.createObjectURL(file))
        setFileName(file.name)

        Storage.put(file.name, file, { contentType: ''})
        .then (()=> {
            console.log('successfully saved file')

            //create dynamoDB files
            const fileDetails = {
                name: file.name,
                moduleChapterID: undefined,
                file: {
                    bucket: awsExports.aws_user_files_s3_bucket,
                    region: awsExports.aws_user_files_s3_bucket_region,
                    key: file.name
                }
            }
            API.graphql({
                query: mutations.createFile,
                variables: {input: fileDetails}
            });
            
            console.log('successfully Added')
            window.location.reload(false);
        })
        .catch(err => console.log('error upload file!', err))
    }

    return (
        <div className="staff-pages-container">

            <HeaderAndSideNav
                toggledBar={toggledBar} 
                setToggledBar={setToggledBar}
                activeTab={activeTab}
                campusId={campusId}
                choosedCampus={choosedCampus} /> 

            <div className='staff-pages-content'>
                <div className='staff-pages-header-tilte'>Faculties and Schools</div>
                <hr className='staff-page-hr'/>

                <DepartmentsList 
                    setShowCreateFaculty={setShowCreateFaculty}
                    setShowCreateDepartment={setShowCreateDepartment}
                    setShowCreateQualification={setShowCreateQualification}
                    locationCampusDetails={locationCampusDetails}
                    setStateFacultyID={setStateFacultyID}
                    setStateDepartmentID={setStateDepartmentID}
                    faculty={faculty} 
                    setFaculty={department}
                    department={department} 
                    setDepartment={setDepartment}
                    qualification={qualification} 
                    setQualification={setQualification}
                    campusId={campusId} />

                {/* The Pup-out window that allows the admin to create */}
                {/* a new faculty or school. */}
                {/* By default the display is set to false */}
                <div 
                    className='pop-out-window'
                    style={{ display:showCreateFaculty === false ? 'none' : ''}} >
                        <div className='pop-up-title' >Create a new Faculty</div>

                        <img style={{marginTop:'-2rem'}} src={fileUrl} alt='' className='createUser-profile-picture'/>
                        
                        <input
                            style={{
                                background:'red', 
                                position:'absolute', 
                                top: '17%', 
                                marginLeft:'44%', 
                                width: '4.5rem', 
                                opacity:0}} 
                            onChange={onChangeHandler}
                            id='fileid' type='file' name='filename'/>

                        <input
                            className='lg-pop-up-input'
                            placeholder='Faculty name'
                            value={facultyNameInputValue}
                            onChange={e => setFacultyNameInputValue(e.target.value)}
                        />
                        <input
                            className='lg-pop-up-input'
                            placeholder='Head of faculty'
                            value={facultyHead}
                            onChange={e => setFacultyHead(e.target.value)}
                        />
                        <input
                            className='lg-pop-up-input'
                            placeholder='Country'
                            value={facultyCountry}
                            onChange={e => setFacultyCountry(e.target.value)}
                        />
                        <input
                            className='lg-pop-up-input'
                            placeholder='City'
                            value={facultyCity}
                            onChange={e => setFacultyCity(e.target.value)}
                        />
                        <input
                            className='lg-pop-up-input'
                            placeholder='Street address'
                            value={facultyAddress}
                            onChange={e => setFacultyAddress(e.target.value)}
                        />
                        <input
                            className='lg-pop-up-input'
                            placeholder='Phone number'
                            value={facultyPhoneNumber}
                            onChange={e => setFacultyPhoneNumber(e.target.value)}
                        />
                        <input
                            className='lg-pop-up-input'
                            placeholder='Email address'
                            value={facultyEmail}
                            onChange={e => setFacultyEmail(e.target.value)}
                        />
                        <div 
                            className='close-pop-up-icon' 
                            onClick={ () => setShowCreateFaculty(false)} />
                        <div 
                            onClick={ createNewFaculty } 
                            className='create-pop-up-button'
                        >Create</div>
                </div>

                {/* The Pup-out window that allows the admin to create */}
                {/* a new department. */}
                {/* By default the display is set to false */}
                <div 
                    className='pop-out-window'
                    style={{ display:showCreateDepartment === false ? 'none' : ''}} >
                        <div className='pop-up-title'>Create a new Department</div>
                        <input
                            className='lg-pop-up-input'
                            placeholder='Department Name'
                            value={departmentNameInputValue}
                            onChange={e => setDepartmentNameInputValue(e.target.value)}
                        />
                        <input
                            className='lg-pop-up-input'
                            placeholder='Head Of Department'
                            value={headofDepartmentInputValue}
                            onChange={e => setHeadofDepartmentInputValue(e.target.value)}
                        />
                        <div 
                            className='close-pop-up-icon' 
                            onClick={ () => setShowCreateDepartment(false)} />
                        <div 
                            onClick={ createNewDepartment } 
                            className='create-pop-up-button'
                        >Create</div>
                </div>

                {/* The Pup-out window that allows the admin to create */}
                {/* a new qualification. */}
                {/* By default the display is set to false */}
                <div 
                    className='pop-out-window'
                    style={{ display:showCreateQualification === false ? 'none' : ''}} >
                        <div className='pop-up-title'>Create a new qualification</div>
                        <input
                            className='lg-pop-up-input'
                            placeholder='Qualification Name'
                            value={qualificationNameInputValue}
                            onChange={e => setQualificationNameInputValue(e.target.value)}
                        />
                        <input
                            className='lg-pop-up-input'
                            placeholder='Qualification Level'
                            value={qualificationLevelInputValue}
                            onChange={e => setQualificationLevelInputValue(e.target.value)}
                        />
                        <input
                            className='lg-pop-up-input'
                            placeholder='Qualification Year (number only)'
                            value={qualificationYearInputValue}
                            onChange={e => setQualificationYearInputValue(e.target.value)}
                        />
                        <div 
                            className='close-pop-up-icon' 
                            onClick={ () => setShowCreateQualification(false)} />
                        <div 
                            onClick={ createNewQualification } 
                            className='create-pop-up-button'
                        >Create</div>
                </div>  

            </div>
        </div>
    );
}

export default DepartmentsPage;