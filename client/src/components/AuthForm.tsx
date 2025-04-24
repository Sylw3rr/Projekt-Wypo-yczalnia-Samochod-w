import { useState } from 'react';
import axios from 'axios';

export const AuthForm = ({ type }: { type: 'login' | 'register' }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/${type}`, { email, password });
      if (type === 'login') {
        localStorage.setItem('token', response.data.token);
        window.location.href = '/';
      }
    }catch (error) {
        let errorMessage = 'Unknown error';
        if (axios.isAxiosError(error)) {
          errorMessage = error.response?.data || error.message;
        }
        alert('Error: ' + errorMessage);
      }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>{type.charAt(0).toUpperCase() + type.slice(1)}</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">{type}</button>
    </form>
  );
};