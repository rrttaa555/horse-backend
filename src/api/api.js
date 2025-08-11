const API_BASE = 'https://horse-backend.onrender.com/api';

const headers = (token) => ({
  'Content-Type': 'application/json',
  Authorization: token ? `Bearer ${token}` : '',
});

export const registerUser = async (email, password, username) => {
  const res = await fetch(API_BASE + '/auth/register', {
    method: 'POST',
    headers: headers(null),
    body: JSON.stringify({ email, password, username }),
  });
  return res.json();
};

export const loginUser = async (email, password) => {
  const res = await fetch(API_BASE + '/auth/login', {
    method: 'POST',
    headers: headers(null),
    body: JSON.stringify({ email, password }),
  });
  return res.json();
};

export const getHorses = async () => {
  const res = await fetch(API_BASE + '/horses');
  return res.json();
};

export const createHorse = async (horse, token) => {
  const res = await fetch(API_BASE + '/horses', {
    method: 'POST',
    headers: headers(token),
    body: JSON.stringify(horse),
  });
  return res.json();
};

export const getVideos = async () => {
  const res = await fetch(API_BASE + '/videos');
  return res.json();
};

export const createVideo = async (video, token) => {
  const res = await fetch(API_BASE + '/videos', {
    method: 'POST',
    headers: headers(token),
    body: JSON.stringify(video),
  });
  return res.json();
};

export const getMessagesBetween = async (user1, user2) => {
  const res = await fetch(API_BASE + '/messages/' + user1 + '/' + user2);
  return res.json();
};

export const sendMessage = async (msg, token) => {
  const res = await fetch(API_BASE + '/messages', {
    method: 'POST',
    headers: headers(token),
    body: JSON.stringify(msg),
  });
  return res.json();
};
