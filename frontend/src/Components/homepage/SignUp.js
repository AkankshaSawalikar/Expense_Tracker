
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { InnerLayout } from '../../styles/Layouts';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { signup } = useAuth();

  const handleSignup = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const fakeToken = "dummy-token"; // Replace with actual authentication
      signup(fakeToken);
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <InnerLayout>
      <div style={styles.signupContainer}>
        <div style={styles.signupBox}>
          <h2 style={styles.heading}>Sign Up</h2>
          <form onSubmit={handleSignup} style={styles.form}>
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
              <label style={styles.label}>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <div style={styles.inputContainer}>
              <label style={styles.label}>Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                style={styles.input}
              />
            </div>
            <button type="submit" style={styles.button}>Sign Up</button>
          </form>
          <p style={styles.text}>
            Already have an account? <Link to="/login" style={styles.link}>Login</Link>
          </p>
        </div>
      </div>
    </InnerLayout>
  );
}

const styles = {
  signupContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(to right, #667eea, #764ba2)',
  },
  signupBox: {
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
    background: '#ff758c',
    color: 'white',
    border: 'none',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
  text: {
    marginTop: '10px',
    fontSize: '0.9rem',
  },
  link: {
    color: '#ff758c',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default SignUp;
