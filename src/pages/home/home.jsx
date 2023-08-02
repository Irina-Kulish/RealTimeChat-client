import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './style.module.css';
import { socket } from "../webSocketClient";

export const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', user);
    socket.emit('userLoggedIn', { user, socketID: socket.id });
    navigate('/chat');
  };

  const handleInput = (e) => {
    setUser(e.target.value)
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <h2>Chat entry</h2>
      <label htmlFor="user" />
      <input 
        type="text" required
        placeholder='Enter your name'
        id="user" 
        value={user} 
        onChange={handleInput}
        className={styles.userInput}
      />
      <button type="submit" className={styles.homeBtn}>Submit</button>
    </form>
  );
}
