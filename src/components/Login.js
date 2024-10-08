import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

export const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const { user, error } = await supabase.auth.signIn({
          email: formData.email,
          password: formData.password,
        });
        if (error) throw error;
        alert('Login successful!');
      } catch (error) {
        alert(error.message);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
    );
};

export default Login;