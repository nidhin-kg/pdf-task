import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // Add a state to track if it's login or signup

  async function handleLogin(e) {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8000/', {
        email,
        password,
      })
      .then(res => {
        if (res.data === 'exist') {
          setIsLoggedIn(true);
        } else if (res.data === 'notexist') {
          alert('User has not signed up');
        }
      })
      .catch(e => {
        alert('Wrong details');
        console.log(e);
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSignup(e) {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8000/signup', {
        email,
        password,
      })
      .then(res => {
        if (res.data === 'exist') {
          alert('User already exists');
        } else if (res.data === 'notexist') {
          alert('Signup successful!');
          setIsLoggedIn(true);
        }
      })
      .catch(e => {
        alert('Wrong details');
        console.log(e);
      });
    } catch (error) {
      console.error(error);
    }
  }

  // Toggle between login and signup forms
  function toggleForm() {
    setIsLogin(!isLogin);
  }

  return (
    <div className='login container'>
      {isLoggedIn ? (
        <div className="container">
          <h1>Welcome, {name}!</h1>
          <p>Contact Number: {contactNumber}</p>
          <button className="btn btn-primary" onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>{isLogin ? 'Login' : 'Signup'}</h1>
          {isLogin ? (
            <form onSubmit={handleLogin}>
              {/* Add Bootstrap classes for styling */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter your email'
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Enter your password'
                />
              </div>
              <button type='submit' className="btn btn-primary">Login</button>
            </form>
          ) : (
            <form onSubmit={handleSignup}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  placeholder='Enter your name'
                />
              </div>
              <div className="mb-3">
                <label htmlFor="contactNumber" className="form-label">Contact Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="contactNumber"
                  onChange={(e) => setContactNumber(e.target.value)}
                  placeholder='Enter your contact number'
                />
              </div>
              <button type='submit' className="btn btn-primary">Signup</button>
            </form>
          )}
          <br />
          <p>OR</p>
          <button className="btn btn-secondary" onClick={toggleForm}>
            {isLogin ? 'Switch to Signup' : 'Switch to Login'}
          </button>
        </div>
      )}
    </div>
  );
}

export default AuthPage;
