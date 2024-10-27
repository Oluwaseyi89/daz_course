import React, {useState, useEffect} from 'react';
// import { Form, useNavigate } from 'react-router-dom';

import '../styles/login.css';
import { FaFacebook, FaGoogle, FaXTwitter } from 'react-icons/fa6';
import { changingBgImages } from '../states';
import Registration from './Registration';
import PasswordReset from './PasswordReset';
import { getUserAuth } from '../utils/firebaseMethods';
import { setAuthUser } from '../states';

function Login (props) {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [pageToView, setPageToView] = useState();
    const availablePages = ["login", "registration", "password-reset"];

   


    useEffect(() => {
    
        const intervalId = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % changingBgImages.length);    
        }, 5000);
    
        // Clear the interval when the component is unmounted
        return () => clearInterval(intervalId);
      }, [changingBgImages.length]);
    
      const backgroundStyle = {
        backgroundImage: `url(${changingBgImages[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out',   
      };

      const handleSwitchToRegistration = () => {
        setPageToView(availablePages[1]);
      }

      const handleSwitchToLogin = () => {
        setPageToView(availablePages[0]);
      }
    

      const pageToRender = () => {
        const [a, b, c] = availablePages;
        switch(pageToView) {
          case a: return <LoginForm handleSwitchToRegistration={handleSwitchToRegistration}/>;
          case b: return <Registration handleSwitchToLogin={handleSwitchToLogin}/>;
          case c: return <PasswordReset/>;
          default: return <LoginForm handleSwitchToRegistration={handleSwitchToRegistration}/>;
        }
      }

    

    return (
        <div className="login" style={backgroundStyle}>
            {pageToRender()}
        </div>
      );

};

const LoginForm = ({handleSwitchToRegistration}) => {

  const [formCred, setFormCred] = useState({
    email: "",
    password: ""
  });

  console.log(formCred)

  const {email, password} = formCred;

  const handleFormCredChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setFormCred({...formCred, [name]:value});
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if(email && password) {

      getUserAuth(formCred).then(res => {
        setAuthUser(res);
        alert("User authenticated!");
        setTimeout(() => {window.location.href = "/";}, 1000);
      }).catch(err => {
        alert(err.message);
      })
    } else {
      alert("fill all fields")
    }


  }

  return (
    <div className='login-form'>
      <form className="login-card" onSubmit={(e) => handleFormSubmit(e)}>
            <div className='login-title'>                        
              <img alt="daz-logo" src="../assets/images/daz_logo.svg"/>
              <h3 style={{fontFamily: "Mulish Bold"}}>DazCourse</h3>
            </div>
            
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" name='email' value={email} onChange={(e) => handleFormCredChange(e)} placeholder="Enter your E-mail" required/>
            </div>
    
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" name='password' value={password} onChange={(e) => handleFormCredChange(e)} placeholder="Enter your password" required/>
            </div>
    
            {/* <button className="login-btn" onClick={(e) => handleFormSubmit(e)}>Login</button> */}
            <input className='login-btn' type='submit' value="Login" />
    
            <div className="social-login">
              <div className='social-item'>
                <FaGoogle/>
              </div>
              <div className='social-item'>
                <FaFacebook/>
              </div>
              <div className='social-item'>
                <FaXTwitter/>
              </div>
            </div>
          </form>
          <div className='register-suggestion'>Don't have an account? <span onClick={() => handleSwitchToRegistration()}>Register</span> instead.</div>
    </div>
  );
}

export default Login;