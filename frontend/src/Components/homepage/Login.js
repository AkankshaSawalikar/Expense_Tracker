// Components/homepage/Login.js
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { InnerLayout } from '../../styles/Layouts';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add actual authentication logic here (for example, check with an API)
    const fakeToken = "dummy-token"; // Replace with actual token after login success
    login(fakeToken); // Set the token and navigate to dashboard
  };

  return (
    <InnerLayout>
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don’t have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
    </InnerLayout>
  );
}

export default Login;
