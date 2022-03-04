import React, { useState, useEffect } from 'react';
import { Storage } from "aws-amplify";

import './generalFees.css';

import HeaderAndSideNav from '../../../../Components/HeaderAndSideNav';
import SideNavigation from '../../Components/SideNavigation';


function GeneralFees(props) {

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(false);
    const [activeTab, setActiveTab] = useState('generalFees');
    const [choosedCampus, setChoosedCampus] = useState(false);

    const [generalToggledBar, setGeneralToggledBar] = useState(false);

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    const [file, setFile] = useState('');
    const [fetchedFileName, setFetchedFName] = useState('');
    const [fileName, setFileName] = useState('');
    const [files, setFiles] = useState([])

    function handleChangeDocument(e) {
        setFile(e.target.files[0]);
    }

    async function handleSubmitDocument(e) {
        const result = await Storage.put(file.name, file, {
          contentType: 'application/pdf'
        }).then (()=> {
            console.log('successfully saved file')})
    }

    useEffect(() => {
        fetchImages()
      }, [])
      async function fetchImages() {
        let fileKeys = await Storage.list('')
        fileKeys = await Promise.all(fileKeys.map(async k => {
          const key = await Storage.get(k.key)
          setFetchedFName(k.key)
          return key

        }))
        setFiles(fileKeys)
      }

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

                    {files.map(file => (
                    <div className='pdf-list' key={file}>
                        download {fetchedFileName}
                    </div>
                ))
                }
                </div>
            </div>
        </div>
    );
}

export default GeneralFees;