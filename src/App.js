import React, { useState } from 'react';
import './App.css'; // Import the CSS file

const App = () => {
    const [isLogin, setIsLogin] = useState(true); // Define isLogin state variable
    const [isLightMode, setIsLightMode] = useState(false); // Define isLightMode state variable

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    const toggleLightMode = () => {
        setIsLightMode(!isLightMode);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        // You can add form submission logic here
        console.log('Form submitted');
    };

    return (
        <div className={`app ${isLightMode ? 'light-mode' : ''}`}>
            <button className="light-mode-button" onClick={toggleLightMode}>
                {isLightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            </button>
            <div className="container">
                <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
                <form style={{ display: 'grid', rowGap: '10px' }} onSubmit={handleSubmit}>
                    <div>
                        <label>Email</label>
                        <input type="email" placeholder="Email" />
                    </div>                        
                            <div>
                                <label>Password</label>
                                <input type="password" placeholder="Password" />
                            </div>
                    {!isLogin && (
                            <div>
                                <label>Confirm Password</label>
                                <input type="password" placeholder="Confirm Password" />
                            </div>
                    )}
                    <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
                </form>
                <div className="form-toggle">
                    <p>{isLogin ? 'New user?' : 'Already have an account?'}</p>
                    <div className="login-toggle">
                        <span onClick={toggleForm}>
                            {isLogin ? 'Sign up' : 'Login'}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
