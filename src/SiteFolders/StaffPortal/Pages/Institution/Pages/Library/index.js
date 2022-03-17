import React, { useEffect, useState } from 'react';

import { Storage } from "aws-amplify";

import './library.css';
import SideNavigation from '../../Components/SideNavigation';
import HeaderAndSideNav from '../../../../Components/HeaderAndSideNav';


const baseS3URL = 'https://vincolibrarys3100304-dev.s3.amazonaws.com/public/'

function Library(props) {

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(false);
    const [activeTab, setActiveTab] = useState('library');
    const [choosedCampus, setChoosedCampus] = useState(false);

    const [generalToggledBar, setGeneralToggledBar] = useState(false);

    const [selectedFile, setSelectedFile] = useState();
    const [files, setFiles] = useState([]);
    const [isPuttingFiles, setIsPuttingFiles] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    //automatically scroll to top
    useEffect(() => { 
        window.scrollTo(0,0);
    }, []);

    useEffect( () => {
        async function fetchFiles() {
            Storage.list('') // for listing ALL files without prefix, pass '' instead
                .then(result => {
                    setFiles(result)
                })
                .catch(err => console.log(err));
        }
        fetchFiles()
    })


    function onChangeHandler(e) {
        setSelectedFile(e.target.files[0]);
    }

    async function handleAddFile() {
        setIsLoading(true)
        
        const response = await Storage.put(selectedFile.name, selectedFile, {contentType: 'application/pdf'})
        setIsPuttingFiles(true);
        setIsLoading(false)
    }


    return (
        <>
        {isLoading ? 
            <div className='loader-container'>
                <div className='loader' />
            </div>
        : '' }
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

            <div className="library-content"> 
                <div 
                    className='staff-pages-header-tilte' 
                    style={{marginLeft: '3rem'}} >
                    Library
                </div>
                <hr className='staff-page-hr' />

                <div style={{display: 'flex', marginLeft: '4rem'}}>
                    <input
                        onChange={onChangeHandler}
                        type='file'
                        className='upload-accCalendar-file' />
                    <button
                        onClick={handleAddFile}
                        className='accCalendar-file-btn'>
                            Upload
                    </button>
                    {isPuttingFiles && (
                        <div className='success-message'>
                            File successfully uploaded.
                        </div>
                    )}
                </div>
                <div className='library-search-container'>
                    <input
                        placeholder='Search a document'
                        className='library-search' 
                        type='search' autoFocus />
                    <div className='library-search-icon'/>
                </div>
                <div style={{marginTop: '4rem', marginRight: '4rem'}}>
                    {files.map(mapFile => (
                        <a 
                            href={`${baseS3URL}${mapFile.key}`}
                            target='_blank' rel='noreferrer'>
                            <div className='pdf-list-container'>
                                <div className='pdf-icon'/>
                                <div className='pdf-list-element'>{mapFile.key}</div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            
        </div>
        </>
    );
}

export default Library;