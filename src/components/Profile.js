import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

export const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const user = supabase.auth.user();
    if (user) {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('user_id', user.id)
        .single();
      if (error) {
        console.error('Error fetching profile:', error);
      } else {
        setProfile(data);
      }
    }
  };

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from('users')
        .update(profile)
        .eq('profile_id', profile.id);
      if (error) throw error;
      alert('Profile updated successfully!');
      setEditing(false);
    } catch (error) {
      alert(error.message);
    }
  };

  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <h2>Profile</h2>
      {editing ? (
        <form onSubmit={handleSubmit}>
          <input name="username" value={profile.username} onChange={handleChange} />
          <input name="email" value={profile.email} onChange={handleChange} />
          <input name="first_name" value={profile.first_name} onChange={handleChange} />
          <input name="last_name" value={profile.last_name} onChange={handleChange} />
          <input name="institution" value={profile.institution} onChange={handleChange} />
          <input name="location" value={profile.location} onChange={handleChange} />
          <input name="phone_number" value={profile.phone_number} onChange={handleChange} />
          <button type="submit">Save Changes</button>
        </form>
      ) : (
        <div>
          <p>Username: {profile.username}</p>
          <p>Email: {profile.email}</p>
          <p>Name: {profile.first_name} {profile.last_name}</p>
          <p>Institution: {profile.institution}</p>
          <p>Location: {profile.location}</p>
          <p>Phone: {profile.phone_number}</p>
          <button onClick={() => setEditing(true)}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default Profile;