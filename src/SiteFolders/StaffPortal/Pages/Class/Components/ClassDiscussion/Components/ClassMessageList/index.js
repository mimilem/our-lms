import React, { useEffect, useState } from 'react';

//import aws api and components to create new cart item
import { API, graphqlOperation } from "aws-amplify";
import { listMessages } from '../../../../../../../../graphql/queries';

import './classMessageList.css';


function ClassMessageList({ messageInput, setMessageInput, sendMessage }) {

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
    }, [])

    return (
        <div className='message-list-container'>
            <div className='message-list'>
                <div className='message-list-first-element'/>
                { message.map(item => (
                    <div>
                        <div className='sender-name'>{item.author}</div>
                        <div className='sender-message-element'>
                            {item.body}
                        </div>
                        <div className='sender-time'>{item.createdAt}</div>
                    </div>))
                }
                <div>
                    <div className='receiver-name'>Pascali Goma</div>
                    <div className='receiver-message-element'>
                        Hello Teacher!
                    </div>
                    <div className='receiver-time'>today, 8:00pm</div>
                </div>
                
                <div className='message-list-last-element'/>
                
            </div>
        </div>
    );
}

export default ClassMessageList;