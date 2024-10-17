import React from 'react';

import '../../styles/instructorprofilecard.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaMessage, FaTwitter } from 'react-icons/fa6';

function InstructorProfileCard (props) {

    const name = "Jason Ritchey";
  const title = "UX Designer";
  const totalStudents = 2778;
  const totalReviews = 1220;
  const bio = `I've been preaching and practicing the gospel of User Experience (UX) to Fortune 100, 500, and Government organizations for nearly three decades. That work includes commercial industry leaders like Google Ventures, Krull/Duff + Phelps, Broadbridge, Conde Nast, Johns Hopkins, Mettler-Toledo, PHH, Arval SC, Johnson and Walters Kluger, as well as government agencies like the National Science Foundation, National Institutes of Health and the Dept. of Homeland Security.`;


    return (
        <div className="instructorprofilecard">
          <div className="profile-header">
            <div className="profile-image"></div> {/* Placeholder for the image */}
            <h2>{name}</h2>
            <p>{title}</p>
          </div>
    
          <div className="profile-stats">
            <span>Total Students: {totalStudents}</span>
            <span>Total Reviews: {totalReviews}</span>
          </div>
    
          <p className="profile-bio">{bio}</p>
    
          <div className="profile-social">
            <div className="social-btn"><span><FaMessage/></span>Message</div>
            <div className="social-btn"><span><FaLinkedin/></span>LinkedIn</div>
            <div className="social-btn"><span><FaTwitter/></span>Twitter</div>
            <div className="social-btn"><span><FaInstagram/></span>Instagram</div>
            <div className="social-btn"><span><FaFacebook/></span>Facebook</div>
          </div>
        </div>
      );

};

export default InstructorProfileCard;