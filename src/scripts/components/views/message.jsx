import '../../../styles/components/views/message.scss';

import React from 'react';
import { formatDate } from '../../utils/date-utils';

const getSubjectClassNameByRating = (rating) => {
    const hasLowRating = rating <= 5;
    return hasLowRating ? 'message-subject-low-rating' : 'message-subject-high-rating'
}

const Message = ({
    question_id,
    subject_id,
    thread_id,
    score,
    text,
    created_at,
    subject,
    question,
    team,
    id,
    className,
}) => {
    const messageClassName = `message ${className}`;
    const subjectClassName = `message-subject ${getSubjectClassNameByRating(score)}`;

    const dateFormatted = formatDate(created_at);

    return (
        <article className={messageClassName}>
            <h2 className={subjectClassName}>
                {subject}
            </h2>
            <p className="message-question">
                {question}
            </p>
            <p className="message-text">
                {text}
            </p>
            <p className="message-team">
                {team}
            </p>
            <span className="message-date">
                {dateFormatted}
            </span>
        </article>
    );
};

export default Message;