import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/home';
import { Chat } from './pages/chat/chat';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/chat' element={<Chat />} />
    </Routes>
  );
}

export default App;
