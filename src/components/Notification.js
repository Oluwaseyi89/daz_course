import React from 'react';

import '../styles/notification.css';

function Notification ({ name, message, time }) {

    return (
        <li className="notification">
            <div className="avatar-placeholder" />
            <div className="notification-content">
                <p className="notification-text">
                <strong>{name}</strong> {message}
                </p>
                <p className="notification-time">{time}</p>
            </div>
        </li>
    );

};

export default Notification