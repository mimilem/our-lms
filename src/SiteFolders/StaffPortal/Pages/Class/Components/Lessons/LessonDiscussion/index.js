import React, { useState, useEffect } from 'react';

import TextareaAutosize from 'react-textarea-autosize';

// Import the amplify API and components to handle the 
// requests.
import { API, graphqlOperation } from "aws-amplify";
import * as mutations from '../../../../../../../graphql/mutations';
import { listMessages } from '../../../../../../../graphql/queries';

//import the styling compnent(s).
import './lessonDiscussion.css';


function LessonDiscussion() {

    const [messageInput, setMessageInput] = useState()

    const [message, setMessage] = useState([])

    /* fetch the API data of messagesfaculties and departements */
    useEffect( () => {
        const fetchMessage = async () => {
            try {
                const messageResults = await API.graphql(
                    graphqlOperation(listMessages)
                )
                const faculty = messageResults.data.listMessages.items
                setMessage(faculty)
            } 
            catch (error) {
                console.log(error)
            }
        }
        fetchMessage();
    })

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
    }

    return (
        <div className="disccusion-container">
            { message.reverse().map(messageMapItem => (
                <div className='my-msg-container'>
                    <div className='my-msg'>
                        {messageMapItem.body}
                    </div>
                    <div className='my-icon'/>
                </div>))
            }
            <div className='sender-msg-container'>
                <div className='sender-icon'/>
                <div className='sender-msg'>
                    Sender Message
                </div>
            </div>
            <div className='type-msg-area'>
                <div className='lesson-file-icon'/>           
                <TextareaAutosize 
                    placeholder='Write a message...'
                    className='lesson-discussion-type-msg'
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)} />     
                <div 
                    className='lesson-send-icon'
                    onClick={createNewmessage}/>           
            </div>
        </div>
    );
}

export default LessonDiscussion;