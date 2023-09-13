import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:8000/signup', {
        email,
        password,
      });
      console.log(res.data)
      
      if (res.data === 'exist') {
        alert('User already exists');
      } else if (res.data === 'notexist') {
        alert('Signup successful!');
      }
    } catch (error) {
      console.error(error);
      alert('Wrong details');
    }
  }

  return (
    <div className="container mt-5"> {/* Added Bootstrap container class */}
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center">Signup</h1>
              <form onSubmit={submit}>
                <div className="mb-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    placeholder="Enter your password"
                  />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
              <div className="mt-3 text-center">
                <p>OR</p>
                <Link to="/" className="btn btn-link">Login Page</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
