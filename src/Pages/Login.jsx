import React, { useState } from 'react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginToggle = () => {
    setIsLogin(true);
  };

  const handleSignupToggle = () => {
    setIsLogin(false);
  };

  const loginFunctionality = () => {
    // Implement your login functionality here
    console.log('Login function called');
  };

  const signupFunctionality = () => {
    // Implement your signup functionality here
    console.log('Signup function called');
  };

  return (
    <div className="form-modal bg-color-nav" style={{ marginBottom: '100px', marginTop: '100px' }}>
      <div className="form-toggle">
        <button
          onClick={handleLoginToggle}
          style={{
            borderTopLeftRadius: '20px',
            backgroundColor: isLogin ? '#A938FF' : '#fff',
            color: isLogin ? '#fff' : '#222',
          }}
        >
          log in
        </button>
        <button
          onClick={handleSignupToggle}
          style={{
            borderTopRightRadius: '20px',
            backgroundColor: !isLogin ? '#A938FF' : '#fff',
            color: !isLogin ? '#fff' : '#222',
          }}
        >
          sign up
        </button>
      </div>

      {isLogin ? (
        <div id="login-form">
          <form onSubmit={(e) => { e.preventDefault(); loginFunctionality(); }}>
            <input type="text" placeholder="Enter email or username" id="user_email" required />
            <input type="password" placeholder="Enter password" id="user_password" required />
            <button
              type="submit"
              id="loginBtn"
              className="btn login"
            >
              login
            </button>
            <p>
              <a href="javascript:void(0)">Forgotten password</a>
            </p>
            <hr />
          </form>
        </div>
      ) : (
        <div id="signup-form">
          <form onSubmit={(e) => { e.preventDefault(); signupFunctionality(); }}>
            <input type="email" placeholder="Enter your email" required />
            <input type="text" placeholder="Choose username" required />
            <input type="password" placeholder="Create password" required />
            <button
              type="submit"
              className="btn signup"
            >
              create account
            </button>
            <p>
              Clicking <strong>create account</strong> means that you agree to our{' '}
              <a href="javascript:void(0)">terms of services</a>.
            </p>
            <hr />
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;


