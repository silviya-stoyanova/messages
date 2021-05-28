import '../../../styles/components/views/messages-page.scss';

import React, { useEffect, useState } from 'react';
import { getThreads } from '../../utils/url-utils';
import PageContentWrapper from '../common/page-content-wrapper';
import MessagesList from './messages-list';

const MessagesPage = () => {
    const [threads, setThreads] = useState([]);

    useEffect(() => {
        getThreads()
            .then(allThreads => setThreads(allThreads))
            .catch(error => console.error(error))
    }, [])

    return (
        <section className="messages-page">
            <PageContentWrapper>
                <MessagesList threads={threads} />
            </PageContentWrapper>
        </section>
    );
}

export default MessagesPage;