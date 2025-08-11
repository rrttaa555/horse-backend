import React, { useState } from 'react';

const AddVideoForm = ({ onSave, onCancel }) => {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!file) return alert('Carica un video');
    const videoUrl = URL.createObjectURL(file);
    onSave({
      id: Date.now(),
      url: videoUrl,
      description,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Carica Video</h4>
      <input type="file" accept="video/mp4" onChange={e => setFile(e.target.files[0])} />
      <textarea
        placeholder="Descrizione del video"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button type="submit">Salva</button>
      <button type="button" onClick={onCancel}>Annulla</button>
    </form>
  );
};

export default AddVideoForm;
