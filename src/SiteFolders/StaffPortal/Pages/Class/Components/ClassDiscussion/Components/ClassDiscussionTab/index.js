import React from 'react';

import './classDiscussionTab.css';


function ClassDiscussionTab({ moduleName }) {
    return (
        <>
            <div className='classDiscussionTab-element-title'>
                {moduleName}: Fundamental Of Engeneering
                <div className='edit-icon'/>
            </div>
            <div className='classDiscussionTab-container'>
                <div className='classDiscussionTab-Felement'><b>Lecturer</b></div>
                <div className='classDiscussionTab-element'>Robert Kiyosaki</div>
                <div className='classDiscussionTab-Selement'><b>Students</b></div>
                <div className='classDiscussionTab-element'>Robert Kiyosaki</div>
                <div className='classDiscussionTab-element'>Robert Kiyosaki</div>
                <div className='classDiscussionTab-Lelement'/>
            </div>
        </>
    );
}

export default ClassDiscussionTab;