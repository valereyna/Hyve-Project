import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

export const Register = () => {
  const [formData, setFormData] = useState({
    username: '', password: '', email: '', firstName: '', lastName: '', institution: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });
      if (error) throw error;
      // If signup successful, insert additional user data
      const { data, error: profileError } = await supabase
        .from('users')
        .insert([
          { 
            user_id: user.id, 
            username: formData.username,
            first_name: formData.firstName,
            last_name: formData.lastName,
            institution: formData.institution,
            email: formData.email
          }
        ]);
      if (profileError) throw profileError;
      alert('Registration successful!');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" placeholder="Username" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input name="firstName" placeholder="First Name" onChange={handleChange} required />
      <input name="lastName" placeholder="Last Name" onChange={handleChange} required />
      <input name="institution" placeholder="Institution" onChange={handleChange} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;