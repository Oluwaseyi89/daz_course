import React, { useEffect, useState } from 'react';

import '../styles/registration.css';
import ImageUpload from './ImageUpload';
import { addUser } from '../utils/firebaseMethods';

function Registration ({ handleSwitchToLogin }) {

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [profileImage, setProfileImage] = useState();

    const [isProfileImg, setIsProfileImg] = useState(false);

    console.log(formData);

    const { first_name, last_name, email, password, confirmPassword, imageUrl } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleImageUpload = (file) => {
        setProfileImage(file)
        setIsProfileImg(true);
        // let tmp_path = URL.createObjectURL(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add form validation or submission logic here
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
        } else if(profileImage !== null) {
            let dataToAdd = { first_name, last_name, email, password }

            let addOperation = addUser(dataToAdd, profileImage);

            addOperation.then(() => {
                alert("User Added")
            }).catch(err => alert(err.message));
            
        } else {
            alert("Upload a Photo")
        }
    };


    return (
        <>
        <div className="registration">
        <div className='register-title'>                        
              <img alt="daz-logo" src="../assets/images/daz_logo.svg"/>
              <h3 style={{fontFamily: "Mulish Bold"}}>DazCourse</h3>
            </div>            <form onSubmit={handleSubmit}>
                {
                    isProfileImg 
                    ?
                    <img className='profile-pix' alt='profile-pix' src={URL.createObjectURL(profileImage)}/> 
                    :
                <ImageUpload onImageUpload={handleImageUpload}/>
                }

                <input
                    className="form-input"
                    type="text"
                    name="first_name"
                    placeholder="Enter your First Name"
                    value={first_name}
                    onChange={handleChange}
                    required
                />
                 <input
                    className="form-input"
                    type="text"
                    name="last_name"
                    placeholder="Enter your Last Name"
                    value={last_name}
                    onChange={handleChange}
                    required
                />
                <input
                    className="form-input"
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={handleChange}
                    required
                />
                <input
                    className="form-input"
                    type="password"
                    name="password"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={handleChange}
                    minLength={8}
                    required
                />
                <input
                    className="form-input"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm your Password"
                    value={confirmPassword}
                    onChange={handleChange}
                    minLength={8}
                    required
                />
                <input type="submit" value="Register" />
            </form>
            
            {/* <div className="social-icons">
                <img src="google-icon.png" alt="Google" />
                <img src="facebook-icon.png" alt="Facebook" />
                <img src="close-icon.png" alt="Close" />
            </div> */}

        </div>
            <div className="login-link">
                Already have an account? <span onClick={() => handleSwitchToLogin()}>Login</span> instead.
            </div>
        </>
    );

};

export default Registration;