import '../../../styles/components/views/messages-list.scss';

import React from 'react';
import MessagesListItem from './messages-list-item';

const MessagesList = ({ threads }) => (
    <ul className="messages-list">
        {
            threads.map((thread, index) => (
                <MessagesListItem thread={thread} key={index} />
            ))
        }
    </ul>
);

export default MessagesList;