import React, { useState } from 'react';
import './LoginForm.css';
import { login } from '../../Services/BookServices';
import { useNavigate } from "react-router-dom";

const LoginForm= () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const navigate =useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email,password);
      console.log(response.data);
      if (response.data.jwtToken){
        localStorage.setItem('token',response.data.jwtToken)
        localStorage.setItem('name',response.data.username)
        console.log(localStorage.username);
        navigate('/books')
      }
      else {
        setError(response.message)
      }
    } catch (error) {
      setError(response.message)

    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
      {error && <p className="error-message">{error}</p>}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
