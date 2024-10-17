import React, { useState } from 'react';

import '../../styles/closeaccount.css';

function CloseAccount (props) {

    const [confirmText, setConfirmText] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (confirmText === 'CLOSE') {
      setIsConfirmed(true);
      // Proceed with closing the account
      console.log('Account closed successfully');
    } else {
      alert('Please type CLOSE to confirm.');
    }
  };

    return (
        <div className="closeaccount">
          <h2>Close Account</h2>
          <p>
            Please type <strong>CLOSE</strong> in the box below to confirm you want to close your account. This action is irreversible.
          </p>
          {isConfirmed ? (
            <p className="confirmation-message">Your account has been closed.</p>
          ) : (
            <form onSubmit={handleSubmit} className="close-account-form">
              <input
                type="text"
                placeholder="Type CLOSE to confirm"
                value={confirmText}
                onChange={(e) => setConfirmText(e.target.value)}
                className="close-account-input"
                required
              />
              <button type="submit" className="close-account-button">Close Account</button>
            </form>
          )}
        </div>
      );

};

export default CloseAccount;