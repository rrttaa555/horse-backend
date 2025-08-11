import React, { useState } from 'react';

const AddHorseForm = ({ onSave, onCancel }) => {
  const [horse, setHorse] = useState({
    name: '',
    rider: '',
    age: '',
    price: '',
    location: '',
    description: '',
    image: '',
    phone: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setHorse(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSave({ ...horse, videos: [] });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Aggiungi Cavallo</h2>
      <input name="name" placeholder="Nome Cavallo" onChange={handleChange} required />
      <input name="rider" placeholder="Nome Cavaliere" onChange={handleChange} required />
      <input name="age" type="number" placeholder="Età" onChange={handleChange} />
      <input name="price" type="number" placeholder="Prezzo (€)" onChange={handleChange} />
      <input name="location" placeholder="Luogo" onChange={handleChange} />
      <textarea name="description" placeholder="Descrizione" onChange={handleChange} />
      <input name="image" placeholder="URL immagine cavallo" onChange={handleChange} />
      <input name="phone" placeholder="Numero di telefono" onChange={handleChange} />
      <button type="submit">Salva</button>
      <button type="button" onClick={onCancel}>Annulla</button>
    </form>
  );
};

export default AddHorseForm;
