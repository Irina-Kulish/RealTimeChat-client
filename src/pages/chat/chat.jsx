import { useEffect, useState, useRef } from "react";
import { Body } from "./components/body/body"; 
import { Message } from "./components/message/message-block"; 
import { SideBar } from "./components/sidebar/sidebar"; 
import styles from './style.module.css';
import NET from 'vanta/dist/vanta.net.min';
import { socket } from "../webSocketClient";

export const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('response', (data) => setMessages([...messages, data]))
  }, [socket, messages])

  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        scale: 0.75,
        scaleMobile: 1.00,
        color: 0xcac1c5,
        backgroundColor: 0x151318,
        points: 4.00,
        maxDistance: 24.00,
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <>
  <div ref={myRef} 
      className={styles.vanta, styles.chat} 
      id='vanta'>
    <div className={styles.chat}>
      <SideBar />
      <main className={styles.main}>
      <Body messages={messages} />
      <Message />
      </main>
    </div>
  </div>
    </>
  )
}
