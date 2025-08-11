import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import ChatWindow from '../components/ChatWindow';

const mockUsers = [
  { _id: 'u1', username: 'cavaliere97' },
  { _id: 'u2', username: 'giulia_horses' }
];

const ChatPage = () => {
  const { user } = useAuth();
  const [selected, setSelected] = useState(null);
  const contacts = mockUsers.filter(u => u._id !== user._id);

  return (
    <div>
      <h2>Messaggi</h2>
      <aside>
        {contacts.map(u => (
          <button key={u._id} onClick={() => setSelected(u)}>
            {u.username}
          </button>
        ))}
      </aside>
      <main>
        {selected ? <ChatWindow toUser={selected} /> : <p>Seleziona un utente</p>}
      </main>
    </div>
  );
};

export default ChatPage;
