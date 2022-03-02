import React, { useState, useEffect } from 'react';

// 'useLocation' to receive parameters through the 
// react-dom-router Link. From the Full and Toggled Navigation.
import { useLocation } from 'react-router-dom';

// Import the amplify API and components to handle the 
// requests.
import { API, graphqlOperation } from "aws-amplify";
import { listFacultys, listDepartments, listClasss } from '../../../../graphql/queries';
import * as mutations from '../../../../graphql/mutations';
import awsExports from '../../../../aws-exports';

//import the styling compnent(s).
import './faculties.css';
import '../staffPages.css';

//import all components that will be 
//displayed on the pages.
import FacultiesList from './Components/FacultiesList';
import HeaderAndSideNav from '../../Components/HeaderAndSideNav';
import CreateNewFaculty from './Components/CreateNewFaculty';
import CreateNewDepartment from './Components/CreateNewDepartment';
import CreateNewQualification from './Components/CreateNewQualification';


function FacultiesPage() {

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
    const [facultyPhoneNumber, setFacultyPhoneNumber] = useState('')
    const [facultyEmail, setFacultyEmail] = useState('')
    const [facultyAddress, setFacultyAddress] = useState('')

    const facultyStateDetails = {
        facultyNameInputValue,
        setFacultyNameInputValue,
        facultyHead, 
        setFacultyHead,
        facultyPhoneNumber, 
        setFacultyPhoneNumber,
        facultyEmail, 
        setFacultyEmail,
        facultyAddress, 
        setFacultyAddress
    }

    const [isLoading, setIsLoading] = useState(false)

    const [departmentNameInputValue, setDepartmentNameInputValue] = useState('');
    const [headofDepartmentInputValue, setHeadofDepartmentInputValue] = useState('');

    const departmentStateDetails = {
        departmentNameInputValue,
        setDepartmentNameInputValue,
        headofDepartmentInputValue, 
        setHeadofDepartmentInputValue,
    };

    const [qualificationNameInputValue, setQualificationNameInputValue] = useState('');
    const [qualificationLevelInputValue, setQualificationLevelInputValue] = useState('');
    const [qualificationYearInputValue, setQualificationYearInputValue] = useState('');

    const qualificationStateDetails = {
        qualificationNameInputValue,
        setQualificationNameInputValue,
        qualificationLevelInputValue, 
        setQualificationLevelInputValue,
        qualificationYearInputValue, 
        setQualificationYearInputValue,
    };

    // Initial state to display the pop-out screens. 
    const [showCreateFaculty, setShowCreateFaculty] = useState(false)
    const [showCreateDepartment, setShowCreateDepartment] = useState(false)
    const [showCreateQualification, setShowCreateQualification] = useState(false)


    // Update the state of the faculty and department ID
    const [stateFacultyID, setStateFacultyID] = useState([])
    const [stateDepartmentID, setStateDepartmentID] = useState([])

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
            facultyName: facultyStateDetails.facultyNameInputValue,
            headofFaculty: facultyStateDetails.facultyHead,
            facultyPhoneNumber: facultyStateDetails.facultyPhoneNumber,
            facultyEmailAddress: facultyStateDetails.facultyEmail,
            facultyAdress: facultyStateDetails.facultyAddress,
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
            departmentName: departmentStateDetails.departmentNameInputValue,
            headofDepartment: departmentStateDetails.headofDepartmentInputValue,
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
            qualificationName: qualificationStateDetails.qualificationNameInputValue,
            qualificationLevel: qualificationStateDetails.qualificationLevelInputValue,
            qualificationYear: qualificationStateDetails.qualificationYearInputValue,
            departmentID: stateDepartmentID,
        };
        const newQualification = await API.graphql({ 
            query: mutations.createClass, 
            variables: {input: qualificationDetails}
        });
        window.location.reload(false);
    }

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    /* fetch the API data of faculties and departements */
    useEffect( () => {

        const fetchFaculty = async () => {
            try {
                setIsLoading(true)
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
                setIsLoading(false)
            } 
            catch (error) {
                console.log(error)
                setIsLoading(false)
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
        <div>
            
            {isLoading === true ? 
                <div className='loader-container'>
                    <div className='loader' />
                </div>
            : '' }

            <div className="staff-pages-container">

                <HeaderAndSideNav
                    toggledBar={toggledBar} 
                    setToggledBar={setToggledBar}
                    activeTab={activeTab}
                    campusId={campusId}
                    choosedCampus={choosedCampus} /> 

                <div className='staff-pages-content'>
                    <div className='staff-pages-header-tilte'>Faculties</div>
                    <hr className='staff-page-hr'/>

                    <FacultiesList 
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
                    <CreateNewFaculty 
                        showCreateFaculty={showCreateFaculty}
                        setShowCreateFaculty={setShowCreateFaculty}
                        fileUrl={fileUrl}
                        onChangeHandler={onChangeHandler}
                        createNewFaculty={createNewFaculty}
                        facultyStateDetails={facultyStateDetails} />

                    {/* The Pup-out window that allows the admin to create */}
                    {/* a new department. */}
                    {/* By default the display is set to false */}
                    <CreateNewDepartment 
                        showCreateDepartment={showCreateDepartment}
                        createNewDepartment={createNewDepartment}
                        departmentStateDetails={departmentStateDetails} />

                    {/* The Pup-out window that allows the admin to create */}
                    {/* a new qualification. */}
                    {/* By default the display is set to false */}
                    <CreateNewQualification
                        showCreateQualification={showCreateQualification}
                        createNewQualification={createNewQualification}
                        qualificationStateDetails={qualificationStateDetails} />
                </div>
            </div>
        </div>
    );
}

export default FacultiesPage;