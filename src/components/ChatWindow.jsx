import React, { useEffect, useState } from 'react';
import { getMessagesBetween, sendMessage, getVideos } from '../api/api';
import { useAuth } from '../context/AuthContext';

const ChatWindow = ({ toUser }) => {
  const { user, token } = useAuth();
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState('');

  useEffect(() => {
    const load = async () => {
      const msgs = await getMessagesBetween(user._id, toUser._id);
      const allVideos = await getVideos();
      const myVideos = allVideos.filter(v => v.owner._id === user._id);
      setMessages(msgs);
      setVideos(myVideos);
    };
    load();
  }, [toUser]);

  const handleSend = async () => {
    if (!text.trim() && !selectedVideo) return;

    const msg = await sendMessage({
      from: user._id,
      to: toUser._id,
      text,
      video: selectedVideo || '',
    }, token);

    setMessages(prev => [...prev, msg]);
    setText('');
    setSelectedVideo('');
  };

  return (
    <div>
      <h3>Chat con {toUser.username}</h3>
      <div style={{ maxHeight: 300, overflowY: 'scroll', border: '1px solid #ccc', padding: 10 }}>
        {messages.map(m => (
          <div key={m._id} style={{ textAlign: m.from === user._id ? 'right' : 'left' }}>
            {m.text && <p><strong>{m.text}</strong></p>}
            {m.video && (
              <video src={m.video} controls width="200" style={{ marginTop: 8 }} />
            )}
            <small>{new Date(m.createdAt).toLocaleTimeString()}</small>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 10 }}>
        <input value={text} onChange={e => setText(e.target.value)} placeholder="Scrivi un messaggio" style={{ width: '60%' }} />
        <select value={selectedVideo} onChange={e => setSelectedVideo(e.target.value)} style={{ marginLeft: 10 }}>
          <option value="">+ Condividi video</option>
          {videos.map(v => (
            <option key={v._id} value={v.url}>
              {v.description?.slice(0, 30) || 'Video'}
            </option>
          ))}
        </select>
        <button onClick={handleSend} style={{ marginLeft: 10 }}>Invia</button>
      </div>
    </div>
  );
};

export default ChatWindow;
