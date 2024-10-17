import React, { useState } from 'react';

import '../../styles/accountsettings.css';

function AccountSettings (props) {

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const handleChangePassword = (e) => {
      e.preventDefault();
      if (newPassword !== confirmPassword) {
        alert('New passwords do not match!');
        return;
      }
      // Handle the password change logic here
      console.log('Password changed successfully');
    };

    return (
        <div className="accountsettings">
          <h2>Account</h2>
          <p>Edit your account settings and change your password</p>
          <form onSubmit={handleChangePassword} className="account-form">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value="alfreds@email.com" // hardcoded for now
                readOnly
                className="account-input"
              />
            </div>
    
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter current password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="account-input"
                required
              />
            </div>
    
            <div className="form-group">
              <input
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="account-input"
                required
              />
            </div>
    
            <div className="form-group">
              <input
                type="password"
                placeholder="Re-type new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="account-input"
                required
              />
            </div>
    
            <button type="submit" className="change-password-button">Change Password</button>
          </form>
        </div>
      );

};

export default AccountSettings;