import React, { useState } from 'react';

import '../../styles/privacysettings.css';

function PrivacySettings (props) {

    const [shareProfile, setShareProfile] = useState(false);
  const [showActivityStatus, setShowActivityStatus] = useState(false);
  const [locationTracking, setLocationTracking] = useState(false);

  const handleSaveChanges = (e) => {
    e.preventDefault();
    // Handle save logic
    console.log('Privacy settings saved', {
      shareProfile,
      showActivityStatus,
      locationTracking,
    });
  };

    return (
        <div className="privacysettings">
          <h2>Privacy Settings</h2>
          <p>Manage your privacy preferences below:</p>
          <form onSubmit={handleSaveChanges} className="privacy-form">
            <div className="privacy-form-group">
                <input
                  type="checkbox"
                  checked={shareProfile}
                  onChange={(e) => setShareProfile(e.target.checked)}
                />
              <label>
                Share profile with search engines
              </label>
            </div>
    
            <div className="privacy-form-group">
                <input
                  type="checkbox"
                  checked={showActivityStatus}
                  onChange={(e) => setShowActivityStatus(e.target.checked)}
                />
              <label>
                Show my activity status
              </label>
            </div>
    
            <div className="privacy-form-group">
                <input
                  type="checkbox"
                  checked={locationTracking}
                  onChange={(e) => setLocationTracking(e.target.checked)}
                />
              <label>
                Enable location tracking
              </label>
            </div>
    
            <button type="submit" className="save-changes-button">Save Changes</button>
          </form>
        </div>
      );

};

export default PrivacySettings;