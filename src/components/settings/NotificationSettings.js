import React, { useState } from 'react';

import '../../styles/notificationsettings.css';

function NotificationSettings (props) {

    const [emailNotifications, setEmailNotifications] = useState(true);
    const [smsNotifications, setSmsNotifications] = useState(false);
    const [pushNotifications, setPushNotifications] = useState(true);
  
    const handleToggle = (setState, currentValue) => {
      setState(!currentValue);
    };

    return (
        <div className="notificationsettings">
          <h2>Notification Settings</h2>
          <p>Manage your notification preferences</p>
          <div className="notification-item">
            <label>Email Notifications</label>
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={() => handleToggle(setEmailNotifications, emailNotifications)}
            />
          </div>
    
          <div className="notification-item">
            <label>SMS Notifications</label>
            <input
              type="checkbox"
              checked={smsNotifications}
              onChange={() => handleToggle(setSmsNotifications, smsNotifications)}
            />
          </div>
    
          <div className="notification-item">
            <label>Push Notifications</label>
            <input
              type="checkbox"
              checked={pushNotifications}
              onChange={() => handleToggle(setPushNotifications, pushNotifications)}
            />
          </div>
    
          <button className="save-notification-button">Save Changes</button>
        </div>
      );

};

export default NotificationSettings;