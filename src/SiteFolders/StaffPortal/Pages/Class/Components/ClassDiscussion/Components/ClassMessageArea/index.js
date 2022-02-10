import React from 'react';

import TextareaAutosize from 'react-textarea-autosize';

// Import the amplify API and components to handle the 
// requests.
import { API } from "aws-amplify";
import * as mutations from '../../../../../../../../graphql/mutations';

import './classMessageArea.css';


function ClassMessageArea({ messageInput, setMessageInput, setSendMessage }) {

    const handleMessageChange = (e) => {
        setMessageInput(e.target.value)
    }
    const handleClickSend = () => {
        setSendMessage(true);
    }

    // This Function is used to create a new message
    // then reload the page.
    const createNewmessage = async () => {
        const messageDetails = {
            author:'nephthali',
            body: messageInput,
        };
        const newMessage = await API.graphql({ 
            query: mutations.createMessage, 
            variables: {input: messageDetails}
        });
        window.location.reload(false);
    }

    return (
        <div className='textArea-container'>
            <div className='file-icon'/>
            <TextareaAutosize 
                placeholder='Write a message...'
                className='class-discussion-text-area' 
                value={messageInput}
                onChange={handleMessageChange} />
            <div className='send-icon' onClick={createNewmessage}/>
        </div>
    );
}

export default ClassMessageArea;