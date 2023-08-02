import { useEffect, useState } from 'react';
import styles from './style.module.css';
import { socket } from '../../../webSocketClient';

export const SideBar = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on('userListChanged', (data) => setUsers(data))
  }, [socket, users])

  return (
    <div className={styles.sidebar}>
      <h4 className={styles.header}>Users</h4>
      <ul className={styles.users}>
        {users.map((user) => (
          <li key={user.socketID}>{user.user}</li>
        ))}
      </ul>
    </div>
  );
}
