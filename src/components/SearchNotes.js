import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

export const SearchNotes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [notes, setNotes] = useState([]);

  const handleSearch = async () => {
    const { data, error } = await supabase
      .from('notes')
      .select('*')
      .ilike('title', `%${searchTerm}%`);
    if (error) console.error('Error searching notes:', error);
    else setNotes(data);
  };

  return (
    <div>
      <input 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search notes" 
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {notes.map(note => (
          <div key={note.id}>
            <h3>{note.title}</h3>
            <p>Subject: {note.subject}</p>
            <p>Price: {note.price} nectars</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ViewNote = ({ noteId }) => {
  const [note, setNote] = useState(null);

  useEffect(() => {
    fetchNote();
  }, [noteId]);

  const fetchNote = async () => {
    const { data, error } = await supabase
      .from('notes')
      .select('*')
      .eq('notes_id', noteId)
      .single();
    if (error) console.error('Error fetching note:', error);
    else setNote(data);
  };

  if (!note) return <div>Loading...</div>;

  return (
    <div>
      <h2>{note.title}</h2>
      <p>Subject: {note.subject}</p>
      <p>Content: {note.content}</p>
      <p>Price: {note.price} nectars</p>
    </div>
  );
};

export const UploadNote = () => {
  const [note, setNote] = useState({ title: '', content: '', subject: '', price: 0 });

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = supabase.auth.user();
    if (user) {
      const { data, error } = await supabase
        .from('notes')
        .insert([{ ...note, user_id: user.id }]);
      if (error) alert('Error uploading note');
      else alert('Note uploaded successfully!');
    } else {
      alert('You must be logged in to upload notes');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" onChange={handleChange} required />
      <textarea name="content" placeholder="Content" onChange={handleChange} required />
      <input name="subject" placeholder="Subject" onChange={handleChange} required />
      <input name="price" type="number" placeholder="Price (nectars)" onChange={handleChange} required />
      <button type="submit">Upload Note</button>
    </form>
  );
};

export default SearchNotes;