import { createContext, useContext, useState, useEffect } from 'react';
import { loginUser, registerUser } from '../api/api';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('auth');
    if (saved) {
      const { user, token } = JSON.parse(saved);
      setUser(user);
      setToken(token);
    }
  }, []);

  const login = async (email, password) => {
    const res = await loginUser(email, password);
    if (res.token) {
      setUser(res.user);
      setToken(res.token);
      localStorage.setItem('auth', JSON.stringify({ user: res.user, token: res.token }));
      return true;
    }
    return false;
  };

  const register = async (email, password, username) => {
    const res = await registerUser(email, password, username);
    return res.message === 'Registrato';
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('auth');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
