import React, {useState} from 'react';

import '../../styles/profilesettings.css';

function ProfileSettings (props) {

    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bio, setBio] = useState('');

  const handleProfileSave = (e) => {
    e.preventDefault();
    // Handle profile save logic
    console.log('Profile saved:', { name, email, phone, bio });
  };

    return (
        <div className="profilesettings">
          <h2>Profile Settings</h2>
          <p>Edit your personal information</p>
          <form onSubmit={handleProfileSave} className="profile-form">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="profile-input"
                required
              />
            </div>
    
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="profile-input"
                required
              />
            </div>
    
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="profile-input"
              />
            </div>
    
            <div className="form-group">
              <label>Bio</label>
              <textarea
                placeholder="Tell something about yourself"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="profile-textarea"
              />
            </div>
    
            <button type="submit" className="save-button">Save Profile</button>
          </form>
        </div>
      );

};

export default ProfileSettings;