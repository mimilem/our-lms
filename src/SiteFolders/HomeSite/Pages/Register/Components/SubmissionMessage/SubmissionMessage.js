import React from 'react';

import './submissionMessage.css';


function SubmissionMessage() {
    return (
        <div className='submissionMsg-container'>
            <div className=''>
                <div className='submissionMsg-image'/>
                <h1 className='submissionMsg-title'>Submitted</h1>
                <div className='submissionMsg-message'>
                    Your application has been submitted. Check your email for further intructions.
                </div>
            </div>
        </div>
    );
}

export default SubmissionMessage;