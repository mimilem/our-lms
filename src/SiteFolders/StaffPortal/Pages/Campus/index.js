import React, { useState, useEffect } from 'react';

//import aws api and components.
import { API, graphqlOperation, Auth } from "aws-amplify";
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
import CreateNewCampus from './Components/CreateNewCampus';
import SideNavigation from '../Institution/Components/SideNavigation';


function CampusPage() {

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(false);
    const [activeTab, setActiveTab] = useState('campus');
    const [choosedCampus, setChoosedCampus] = useState(false);

    const [generalToggledBar, setGeneralToggledBar] = useState(false)
    
    const [isLoading, setIsLoading] = useState(false)

    const [campus, setCampus] = useState([])
    const [campusId, setCampusId] = useState({
        campusID: undefined,
        campusHead: '',
        campusAdress: '',
        campusName: '',
        campusCity:'',
        campusPhoneNumber: '',
        campusEmailAddress: '',
        institutionName:''
    });

    const [showSideCampusWindow, setShowSideCampusWindow] = useState(false)

    // State to keep and update the input value when the admin create 
    // an instance.
    const [institutionNameInputvalue, setInstitutionNameInputvalue] = useState('');
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
    
    const campusStateDetails = {
        institutionNameInputvalue, 
        setInstitutionNameInputvalue,
        campusNameInputValue, 
        setCampusNameInputValue,
        campusHeadInputValue, 
        setCampusHeadInputValue,
        campusCityInputValue, 
        setCampusCityInputValue,
        campusPhoneNumberInputValue, 
        setCampusPhoneNumberInputValue,
        campusEmailInputValue, 
        setCampusEmailInputValue,
        campusAddressInputValue, 
        setCampusAddressInputValue
    }

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
        setShowCreateCampus(false)
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

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    useEffect( () => {
        
        const fetchCampus = async () => {
            try {
                
                setIsLoading(true)
                //Campuses
                const campusResults = await API.graphql(
                    graphqlOperation(listCampuss)
                )
                let campus = campusResults.data.listCampuss.items
                setCampus(campus)
                setIsLoading(false)
            }
            catch (error) {
                console.log(error)
                setIsLoading(false)
            }
        }
        fetchCampus();
    }, [])
    
    return (
        <div>
            
            {isLoading ? 
                <div className='loader-container'>
                    <div className='loader' />
                </div>
            : '' }
            <div className='campus-page-content'>

                <HeaderAndSideNav
                    toggledBar={toggledBar} 
                    setToggledBar={setToggledBar}
                    activeTab={activeTab}
                    campusId={campusId.campusID}
                    choosedCampus={choosedCampus} />
                    
                <SideNavigation 
                    generalToggledBar={generalToggledBar} 
                    setGeneralToggledBar={setGeneralToggledBar}
                    activeTab={activeTab} />

                <div 
                    className='staff-pages-content' 
                    style={{marginLeft: showSideCampusWindow===true ? '22rem' : '17rem'}} > 
                    <div 
                        className='staff-pages-header-tilte' 
                        style={{marginLeft: '3rem'}} >
                        Campuses
                    </div>
                    <hr className='staff-page-hr' />

                    <div className="campus-list-container">
                        <div 
                            className='add-campus-card'
                            onClick={()=> setShowCreateCampus(true)}>
                            <div 
                                className='add-campus-icon' 
                                title='Create a Campus'/>
                        </div>

                        {
                        campus.map(campusMapItem => (
                            <div 
                                className='campus-card'
                                key={campusMapItem.id}
                                onClick={()=>{
                                    setShowSideCampusWindow(true);
                                    setGeneralToggledBar(true);
                                    setCampusId({
                                        campusID: campusMapItem.id,
                                        campusHead:campusMapItem.campusHead,
                                        campusName:campusMapItem.campusName,
                                        campusAdress:campusMapItem.campusAdress,
                                        campusCity:campusMapItem.campusCity,
                                        campusPhoneNumber:campusMapItem.campusPhoneNumber,
                                        campusEmailAddress:campusMapItem.campusEmailAddress,
                                        institutionName: campusMapItem.institutionName,
                                    }) 
                            }} >
                                <div className='campus-card-photo'/>
                                <div className='campus-card-name'>
                                    {campusMapItem.campusName}
                                </div>
                                <div className='campus-card-address'>
                                    <b>Address: </b>{campusMapItem.campusAdress}
                                </div>
                                <div className='campus-card-country'>
                                    <b>City/Town: </b>{campusMapItem.campusCity}
                                </div>
                                <div className='campus-card-headOf'>
                                    <b>Head of faculty: </b>{campusMapItem.campusHead}
                                </div>
                            </div>
                        ))
                        }    
                    </div>

                </div>

                <SideCampusWindow 
                    campusId={campusId} 
                    showSideCampusWindow={showSideCampusWindow}
                    setShowSideCampusWindow={setShowSideCampusWindow}
                    generalToggledBar={generalToggledBar} 
                    setGeneralToggledBar={setGeneralToggledBar}
                    setCampusId={setCampusId} />

                {/* The Pup-out window that allows the admin to create */}
                {/* a new campus. */}
                {/* By default the display is set to false */}
                <CreateNewCampus 
                    showCreateCampus={showCreateCampus}
                    setShowCreateCampus={setShowCreateCampus}
                    fileUrl={fileUrl}
                    onChangeHandler={onChangeHandler}
                    campusStateDetails={campusStateDetails}
                    createNewCampus={createNewCampus} />
            </div>
        </div>
    );
}

export default CampusPage;