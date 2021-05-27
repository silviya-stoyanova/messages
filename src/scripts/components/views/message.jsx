import React from 'react';

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
    const lowRatingClassName = 'message-low-rating';
    const highRatingClassName = 'message-high-rating';

    const hasLowRating = score <= 5;
    const hasHighRating = score > 5;

    const messageClassName = `message ${className}`;
    const subjectClassName = `message-subject ${hasLowRating && lowRatingClassName} ${hasHighRating && highRatingClassName}`;

    return (
        <article className={messageClassName}>
            <p className={subjectClassName}>
                {subject}
            </p>
            <p className="message-question">
                {question}
            </p>
            <p className="message-text">
                {text}
            </p>
            <p className="message-team">
                {team}
            </p>
            <p className="message-date">
                {created_at}
            </p>
        </article>
    );
};

export default Message;