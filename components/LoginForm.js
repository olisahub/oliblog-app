import React, { useState } from 'react';
import LoginSign from './LoginSign';
import LoginSuccess from './LoginSuccess';
import './LoginForm.css';

const LoginForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
        <div className="form-container">
            <span className="close-btn">x</span>
            <div className="form-content-left">
                <img src="" alt="spaceship" className="form-img" />
            </div>
            {!isSubmitted ? (
          <LoginSign submitForm={submitForm} />
        ) : (
          <LoginSuccess />
        )}
        </div>
            
            
            
        
        </>
    );
};
export default LoginForm;