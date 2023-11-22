import React, { useState } from 'react';
import LoginForm from '../components/LoginForm.jsx';

function LoginPage({ apiCall }) {
  const [path, setPath] = useState('');
  const [hasAccount, setHasAccount] = useState(true);
  const [loginInputs, setLoginInputs] = useState({
    email: '',
    password: '',
  });
  const [registerInputs, setRegisterInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleLogin = async () => {
    setPath('/auth/login');

    // Make the login API call
    apiCall(
      path,
      'POST',
      { 'Content-Type': 'application/json' },
      loginInputs,
      async (response) => {
        if (response.status === 200) {
          // Successful login
          const data = await response.json();
          // Store the authentication token securely
          document.cookie = `authToken=${data.token}; Secure; HttpOnly`;
          console.log('Login successful!');
        } else {
          // Handle login failure
          console.error('Login failed!');
        }
      }
    );
  };

  const handleRegistration = async () => {
    // Make the registration API call
    apiCall(
      '/auth/register',
      'POST',
      { 'Content-Type': 'application/json' },
      registerInputs,
      async (response) => {
        if (response.status === 201) {
          // Successful registration
          const data = await response.json();
          // Store the authentication token securely
          document.cookie = `authToken=${data.token}; Secure; HttpOnly`;
          console.log('Registration successful!');
        } else {
          // Handle registration failure
          console.error('Registration failed!');
        }
      }
    );
  };

  return (
    <>
      <h1>LoginPage</h1>
      <div className="form-container">
        <div className="login-btn-container">
          <button className={'btn'} onClick={() => setHasAccount(true)}>
            Log in
          </button>
          <button className={'btn'} onClick={() => setHasAccount(false)}>
            Register
          </button>
        </div>

        {hasAccount ? (
          <LoginForm
            inputs={loginInputs}
            handleChange={(e) =>
              setLoginInputs((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value.trim(),
              }))
            }
            onSubmit={handleLogin}
            submitType="Login"
          />
        ) : (
          <LoginForm
            inputs={registerInputs}
            handleChange={(e) =>
              setRegisterInputs((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value.trim(),
              }))
            }
            onSubmit={handleRegistration}
            submitType="Registration"
          />
        )}
      </div>
    </>
  );
}

export default LoginPage;
