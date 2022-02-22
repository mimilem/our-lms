import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//import aws api and components to create new cart item
import { API, graphqlOperation } from "aws-amplify";
import { listCampuss } from '../../../../graphql/queries';
import * as mutations from '../../../../graphql/mutations';
import awsExports from '../../../../aws-exports';

//import the styling compnent(s).
import './campus.css';
import '../staffPages.css';

//import all components that will be 
//displayed on the pages.
import HeaderAndSideNav from '../../Components/HeaderAndSideNav';
import SideCampusWindow from './Components/SideCampusWindow';


function CampusPage() {

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(false);
    const [activeTab, setActiveTab] = useState('campus');
    const [choosedCampus, setChoosedCampus] = useState(false);

    const [campus, setCampus] = useState([])
    const [campusId, setCampusId] = useState({
        campusID:'',
        campusHead: '',
        campusAdress: '',
        campusName: '',
        campusCity:''
    });

    const [showSideCampusWindow, setShowSideCampusWindow] = useState(false)

    // State to keep and update the input value when the admin create 
    // an instance.
    const [institutionNameInputvalue, setInstitutionNameInputvalue] = useState('')
    const [campusNameInputValue, setCampusNameInputValue] = useState('')
    const [campusHeadInputValue, setCampusHeadInputValue] = useState('')
    const [campusCityInputValue, setCampusCityInputValue] = useState('')
    const [campusPhoneNumberInputValue, setCampusPhoneNumberInputValue] = useState('')
    const [campusEmailInputValue, setCampusEmailInputValue] = useState('')
    const [campusAddressInputValue, setCampusAddressInputValue] = useState('')

    // Initial state to display the pop-out screens. 
    const [showCreateCampus, setShowCreateCampus] = useState(false)

    const [fileUrl, setFileUrl] = useState('');
    const [fileName, setFileName] = useState('');

    // This Function is used to create a new campus
    // then reload the page.
    const createNewCampus = async () => {
        const campusDetails = {
            institutionName: institutionNameInputvalue,
            campusName: campusNameInputValue,
            campusHead: campusHeadInputValue,
            campusCity: campusCityInputValue,
            campusPhoneNumber: campusPhoneNumberInputValue,
            campusEmailAddress: campusEmailInputValue,
            campusAdress: campusAddressInputValue,
        };
        const newCampus = await API.graphql({ 
            query: mutations.createCampus, 
            variables: {input: campusDetails}
        });
        window.location.reload(false);
    }

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

    useEffect( () => {
        const fetchCampus = async () => {
            try {
                //faculties
                const campusResults = await API.graphql(
                    graphqlOperation(listCampuss)
                )
                let campus = campusResults.data.listCampuss.items
                setCampus(campus)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchCampus();
    }, [])

    return (
        <div className={choosedCampus === true ? 'staff-pages-container' : 'campus-page-content'}>
            
            <HeaderAndSideNav
                toggledBar={toggledBar} 
                setToggledBar={setToggledBar}
                activeTab={activeTab}
                campusId={campusId.campusID}
                choosedCampus={choosedCampus} />

            <div className='staff-pages-content'>
                <div className='staff-pages-header-tilte' style={{marginLeft: '3rem'}}>Campuses</div>
                <hr className='staff-page-hr' />

                <div className="campus-list-container">
                    <div 
                        className='add-campus-card'
                        onClick={()=> setShowCreateCampus(true)}>
                        <div className='add-campus-icon' title='Create a Campus'/>
                    </div>

                    {
                        campus.map(campusMapItem => (
                            <div 
                                className='campus-card'
                                key={campusMapItem.id}
                                onClick={()=>{
                                    setCampusId({
                                        campusID: campusMapItem.id,
                                        campusHead:campusMapItem.campusHead,
                                        campusName:campusMapItem.campusName,
                                        campusAdress:campusMapItem.campusAdress,
                                        campusCity:campusMapItem.campusCity,
                                    })
                                    setShowSideCampusWindow(true)} }
                                to={{ pathname:'/Staff/Dashboard', state:campusId }} >
                                <div className='campus-card-photo'/>
                                <div className='campus-card-name'>{campusMapItem.campusName}</div>
                                <div className='campus-card-address'><b>Address: </b>{campusMapItem.campusAdress}</div>
                                <div className='campus-card-country'><b>City/Town: </b>{campusMapItem.campusCity}</div>
                                <div className='campus-card-headOf'><b>Head of faculty: </b>{campusMapItem.campusHead}</div>
                                {console.log(campus)}
                            </div>
                        ))
                    }    
                </div>

            
            </div>
            <div style={{ display: showSideCampusWindow === false ? 'none' : '' }}>
                <SideCampusWindow 
                    campusId={campusId} />
            </div>

            {/* The Pup-out window that allows the admin to create */}
                {/* a new campus. */}
                {/* By default the display is set to false */}
                <div 
                    className='pop-out-window'
                    style={{ display:showCreateCampus === false ? 'none' : ''}} >
                        <div className='pop-up-title' >Create a new Campus</div>

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
                            placeholder='Institution name'
                            value={institutionNameInputvalue}
                            onChange={e => setInstitutionNameInputvalue(e.target.value)}
                        />
                        <input
                            className='lg-pop-up-input'
                            placeholder='Campus name'
                            value={campusNameInputValue}
                            onChange={e => setCampusNameInputValue(e.target.value)}
                        />
                        <input
                            className='lg-pop-up-input'
                            placeholder='Head of campus'
                            value={campusHeadInputValue}
                            onChange={e => setCampusHeadInputValue(e.target.value)}
                        />
                        <input
                            className='lg-pop-up-input'
                            placeholder='City/Town'
                            value={campusCityInputValue}
                            onChange={e => setCampusCityInputValue(e.target.value)}
                        />
                        <input
                            className='lg-pop-up-input'
                            placeholder='Street address'
                            value={campusAddressInputValue}
                            onChange={e => setCampusAddressInputValue(e.target.value)}
                        />
                        <input
                            className='lg-pop-up-input'
                            placeholder='Phone number'
                            value={campusPhoneNumberInputValue}
                            onChange={e => setCampusPhoneNumberInputValue(e.target.value)}
                        />
                        <input
                            className='lg-pop-up-input'
                            placeholder='Email address'
                            value={campusEmailInputValue}
                            onChange={e => setCampusEmailInputValue(e.target.value)}
                        />
                        <div 
                            className='close-pop-up-icon' 
                            onClick={ () => setShowCreateCampus(false)} />
                        <div 
                            onClick={ createNewCampus } 
                            className='create-pop-up-button'
                        >Create</div>
                </div>
        </div>
    );
}

export default CampusPage;