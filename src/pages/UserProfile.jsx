import React, { useState, useEffect } from 'react';
import HorseSection from '../components/HorseSection';
import AddHorseForm from '../components/AddHorseForm';
import { useAuth } from '../context/AuthContext';
import { createHorse, getHorses } from '../api/api';

const UserProfile = () => {
  const { user, token, logout } = useAuth();
  const [horses, setHorses] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const loadHorses = async () => {
      const all = await getHorses();
      const mine = all.filter(h => h.owner._id === user._id);
      setHorses(mine);
    };
    loadHorses();
  }, [user]);

  const handleAddHorse = async newHorse => {
    const horseData = {
      ...newHorse,
      owner: user._id,
    };
    const saved = await createHorse(horseData, token);
    setHorses(prev => [...prev, saved]);
    setShowForm(false);
  };

  return (
    <div>
      <header>
        <img src={user.profileImage || 'https://via.placeholder.com/100'} alt="Profilo" />
        <h1>{user.username}</h1>
        <p>{user.bio}</p>
        <button onClick={logout}>Logout</button>
      </header>

      <button onClick={() => setShowForm(true)}>➕ Aggiungi Cavallo</button>
      {showForm && (
        <AddHorseForm onSave={handleAddHorse} onCancel={() => setShowForm(false)} />
      )}

      {horses.map(horse => (
        <HorseSection key={horse._id} horse={horse} />
      ))}
    </div>
  );
};

export default UserProfile;
