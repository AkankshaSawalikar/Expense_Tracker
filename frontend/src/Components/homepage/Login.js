

import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { InnerLayout } from '../../styles/Layouts';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    const fakeToken = "dummy-token"; // Replace with actual authentication
    login(fakeToken); 
  };

  return (
    <InnerLayout>
      <div style={styles.loginContainer}>
        <div style={styles.loginBox}>
          <h2 style={styles.heading}>Login</h2>
          <form onSubmit={handleLogin} style={styles.form}>
            <div style={styles.inputContainer}>
              <label style={styles.label}>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={styles.input}
              />
            </div>
            <div style={styles.inputContainer}>
              <label style={styles.label}>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={styles.input}
              />
            </div>
            <button type="submit" style={styles.button}>Login</button>
          </form>
          <p style={styles.text}>
            Don’t have an account? <Link to="/signup" style={styles.link}>Sign Up</Link>
          </p>
        </div>
      </div>
    </InnerLayout>
  );
}

const styles = {
  loginContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(to right, #667eea, #764ba2)',
  },
  loginBox: {
    background: 'white',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    width: '350px',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '1rem',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputContainer: {
    marginBottom: '15px',
    textAlign: 'left',
  },
  label: {
    fontWeight: 'bold',
    color: '#555',
  },
  input: {
    padding: '10px',
    width: '100%',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    outline: 'none',
  },
  button: {
    background: '#667eea',
    color: 'white',
    border: 'none',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
  buttonHover: {
    background: '#5a67d8',
  },
  text: {
    marginTop: '10px',
    fontSize: '0.9rem',
  },
  link: {
    color: '#667eea',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Login;
