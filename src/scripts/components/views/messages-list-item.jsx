import '../../../styles/components/views/messages-list-item.scss';

import React, { useState } from 'react';
import Message from './message';

const MessagesListItem = ({ thread }) => {
    const hasOneMessage = thread.length === 1;
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleMessages = () => {
        if (hasOneMessage) {
            return;
        };

        setIsExpanded(true);
    }

    const listItemClassName = `
        messages-list-item 
        ${!hasOneMessage ? (isExpanded ? 'messages-list-item-expanded' : 'messages-list-item-collapsed') : ''}`


    const messageClassName = !hasOneMessage ? (isExpanded ? 'message-expanded' : 'message-collapsed') : '';

    return (
        <li className={listItemClassName} data-count={thread.length} onClick={toggleMessages}>
            {
                thread.map(messageDetails => (
                    <Message key={messageDetails.id} className={messageClassName} {...messageDetails} />
                ))
            }
        </li>
    )
}

export default MessagesListItem;