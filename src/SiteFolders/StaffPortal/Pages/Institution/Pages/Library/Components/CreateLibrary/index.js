import React from 'react';

import './createLibrary.css';


function CreateLibrary({showCreate, setShowCreate}) {
    return (
        showCreate && (
            <div className="addLibraryForm-container">
                <div className='addLibraryForm'>
                    <div className='addLibrary-title'>Add a document</div>

                    <div className='addLibrary-inputs'>
                        <input
                            className='addLibrary-input' 
                            placeholder='Title'/>
                        <input
                            className='addLibrary-input' 
                            placeholder='Author'/>
                        <input
                            className='addLibrary-input' 
                            placeholder='Edition & Year'/>
                        <input
                            className='addLibrary-input' 
                            placeholder='Faculty'/>
                        <input
                            className='addLibrary-input' 
                            placeholder='Year'/>
                        <input
                            className='addLibraryFile-input' 
                            type='file' />
                    </div>
                </div>

                <div className='addLibrary-btns'>
                    <button onClick={() => setShowCreate(false)} className='addLibrary-save-btn'>Save</button>
                    <button onClick={() => setShowCreate(false)} className='addLibrary-cancel-btn'>Cancel</button>
                </div>
            </div>
        )
    );
}

export default CreateLibrary;