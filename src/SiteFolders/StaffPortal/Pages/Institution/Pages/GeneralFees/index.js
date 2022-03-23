import React, { useState, useEffect } from 'react';
import { Storage } from "aws-amplify";

import './generalFees.css';

import HeaderAndSideNav from '../../../../Components/HeaderAndSideNav';
import SideNavigation from '../../Components/SideNavigation';
import AddFeesForm from './Components/AddFeesForm';



function GeneralFees() {
    const baseS3FeesURL = 'https://vincolibrarys3100304-dev.s3.amazonaws.com/academicFeesFolder/'

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(false);
    const [activeTab, setActiveTab] = useState('generalFees');
    const [choosedCampus, setChoosedCampus] = useState(false);

    const [generalToggledBar, setGeneralToggledBar] = useState(false);

    
    const [showAddFees, setShowAddFees] = useState(false);

    //automatically scroll to top
    useEffect(() => { 
        window.scrollTo(0,0);
    }, []);

    const [file, setFile] = useState('');
    const [fetchedFileName, setFetchedFName] = useState('');
    const [fileName, setFileName] = useState('');
    const [feesFiles, setFeesFiles] = useState([])

    function handleChangeDocument(e) {
        setFile(e.target.files[0]);
    }

    async function handleSubmitDocument(e) {
        const result = await Storage.put(file.name, file, {
          contentType: 'application/pdf'
        }).then (()=> {
            console.log('successfully saved file')})
    }

    useEffect( () => {
        async function fetchFiles() {
            Storage.list('') // for listing ALL files without prefix, pass '' instead
                .then(result => {
                    setFeesFiles(result)
                    console.log(result)
                })
                .catch(err => console.log(err));
        }
        fetchFiles()
    }, [])

    return (
        <div className="campus-page-content">

            <HeaderAndSideNav 
                toggledBar={toggledBar} 
                setToggledBar={setToggledBar}
                activeTab={activeTab}
                choosedCampus={choosedCampus} />

            <SideNavigation 
                generalToggledBar={generalToggledBar} 
                setGeneralToggledBar={setGeneralToggledBar}
                activeTab={activeTab} />

            <div className="generalFees-content">

                <div 
                    className='staff-pages-header-tilte' 
                    style={{marginLeft: '3rem'}} >
                    General Fees
                </div>
                <hr className='staff-page-hr' />

                <div 
                    onClick={() => setShowAddFees(true)}
                    className='add-fees-icon' 
                    title='Add a fee document' />

                <div style={{marginLeft: '4rem'}}>
                    <div className='generalFees-year'>Academic year: 2022</div>
                    <div style={{display: 'flex'}}>
                        <input
                            type='file'
                            className='upload-accCalendar-file'
                            onChange={handleChangeDocument} />
                        <button
                            onClick={handleSubmitDocument}
                            className='accCalendar-file-btn'>
                                Upload
                        </button>
                    </div>

                    {feesFiles.map(mapFeesFile => (
                        <a 
                            href={`${baseS3FeesURL}${mapFeesFile.key}`}
                            target='_blank' rel='noreferrer'>
                            
                            <div className='feespdf-list-container'>
                                <div className='pdf-icon'/>
                                <div className='pdf-list-element'>{mapFeesFile.key}</div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            <AddFeesForm showAddFees={showAddFees} setShowAddFees={setShowAddFees} />
        </div>
    );
}

export default GeneralFees;