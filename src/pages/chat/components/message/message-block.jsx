import { useState } from 'react';
import styles from './style.module.css';
import { socket } from '../../../webSocketClient';

export const Message = () => {
  const [message, setMessage] = useState('');
  const getLoocalItem = localStorage.getItem('user');

  const handlerSend = (e) => {
    e.preventDefault();

    if (message.trim() && getLoocalItem) {
      socket.emit('message', {
        text: message,
        name: getLoocalItem,
        id: `${socket.id}-${Math.random()}`,
        socketID: socket.id,
      })
    }
    setMessage('');
  }

  return (
    <div className={styles.messageBlock}>
      <form 
        className={styles.form} 
        onSubmit={handlerSend}>
        <input 
          type="text"
          placeholder='Enter your message'
          className={styles.userMessage}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          autoComplete="off"
        />

        <button className={styles.btn}>Send</button>
      </form>
    </div>
  )
}
