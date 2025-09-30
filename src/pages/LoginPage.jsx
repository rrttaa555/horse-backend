import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async e => {
    e.preventDefault();
    const success = await login(email, password);
    if (success) {
      navigate('/profile');
    } else {
      alert('Email o password errati');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '100px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={{ display: 'block', width: '100%', marginBottom: '20px', padding: '8px' }}
        />
        <button type="submit" style={{ padding: '10px 20px' }}>Accedi</button>
      </form>

      {/* 🔗 Link alla registrazione */}
      <p style={{ marginTop: '15px' }}>
        Non hai un account? <Link to="/register">Registrati</Link>
      </p>
    </div>
  );
};

export default LoginPage;

