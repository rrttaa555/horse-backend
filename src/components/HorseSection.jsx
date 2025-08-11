import React, { useState } from 'react';
import VideoCard from './VideoCard';
import AddVideoForm from './AddVideoForm';

const HorseSection = ({ horse }) => {
  const [videos, setVideos] = useState(horse.videos || []);
  const [showForm, setShowForm] = useState(false);

  const handleAddVideo = video => {
    setVideos(prev => [...prev, video]);
    setShowForm(false);
  };

  return (
    <div>
      <h2>{horse.name}</h2>
      <img src={horse.image} alt={horse.name} width="300" />
      <p><strong>Cavaliere:</strong> {horse.rider}</p>
      <p><strong>Età:</strong> {horse.age}</p>
      <p><strong>Prezzo:</strong> €{horse.price}</p>
      <p><strong>Luogo:</strong> {horse.location}</p>
      <p><strong>Descrizione:</strong> {horse.description}</p>
      <p><strong>Contatto:</strong> {horse.phone}</p>

      <button onClick={() => setShowForm(true)}>📹 Aggiungi Video</button>
      {showForm && <AddVideoForm onSave={handleAddVideo} onCancel={() => setShowForm(false)} />}

      <div>
        <h3>Video</h3>
        {videos.length > 0 ? videos.map(v => <VideoCard key={v.id} video={v} />) : <p>Nessun video.</p>}
      </div>
    </div>
  );
};

export default HorseSection;
