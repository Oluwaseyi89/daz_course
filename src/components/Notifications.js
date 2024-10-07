import React, {useContext} from 'react';

import '../styles/notifications.css';
import Notification from './Notification';
import { AppContext } from '../App';

function Notifications (props) {

    const {appState} = useContext(AppContext);


    const {notifications} = appState;

       
      return (
        <div className="notifications">
          <div className="notification-header">
            <h3>Notification</h3>
            <span className="settings-btn">
              <img alt='setting-icon' src='../assets/images/active_sm_settings_icon.svg'/>
            </span>
          </div>
          <ul className="notification-list">
            {notifications.map((notification) => (
              <Notification key={notification.id} name={notification.name} message={notification.message} time={notification.time}/>
            ))}
          </ul>
          <div className="see-all">
            <a href="#see-all">See All</a>
          </div>
        </div>
      );

};

export default Notifications