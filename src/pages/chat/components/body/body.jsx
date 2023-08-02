import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';

export const Body = ({ messages }) => {
  const navigate = useNavigate();

  const handlerLeave = () => {
    localStorage.removeItem('user');
    navigate('/');
    window.location.reload();
  }

  return (
    <>
      <header className={styles.header}>
        <button 
          className={styles.btn} 
          onClick={handlerLeave}
        >
          Exit
        </button>
      </header>

      <div className={styles.container}>
        {
          messages.map((element) =>
            element.name === localStorage.getItem('user') ? (
              <div className={styles.chats} key={element.id}>
                <p className={styles.senderName}>You</p>
                <div className={styles.messageSender}>
                  <p>{element.text}</p>
                </div>  
              </div>
            ) : (
              <div className={styles.chats} key={element.id}>
              <p className={styles.messagrName}>{element.name}</p>
              <div className={styles.messageRecipiend}>
                <p>{element.text}</p>
              </div>
            </div>
            )
            )
          }
      </div>
    </>
  )
}
