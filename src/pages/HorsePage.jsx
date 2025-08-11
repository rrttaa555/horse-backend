import React from 'react';
import { useParams } from 'react-router-dom';
import { getVideos, getHorses } from '../api/api';
import { useEffect, useState } from 'react';
import VideoCard from '../components/VideoCard';

const HorsePage = () => {
  const { horseId } = useParams();
  const [horse, setHorse] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const load = async () => {
      const horses = await getHorses();
      const foundHorse = horses.find(h => h._id === horseId);
      setHorse(foundHorse);

      const allVideos = await getVideos();
      const horseVideos = allVideos.filter(v => v.horse === horseId);
      setVideos(horseVideos);
    };
    load();
  }, [horseId]);

  if (!horse) return <p>Cavallo non trovato.</p>;

  return (
    <div>
      <h1>{horse.name}</h1>
      <img src={horse.image} alt={horse.name} width="300" />
      <p><strong>Cavaliere:</strong> {horse.rider}</p>
      <p><strong>Età:</strong> {horse.age}</p>
      <p><strong>Prezzo:</strong> €{horse.price}</p>
      <p><strong>Luogo:</strong> {horse.location}</p>
      <p><strong>Contatto:</strong> {horse.phone}</p>
      <p><strong>Descrizione:</strong> {horse.description}</p>
      <hr />
      <h3>Video del cavallo</h3>
      {videos.map(v => <VideoCard key={v._id} video={v} />)}
    </div>
  );
};

export default HorsePage;
