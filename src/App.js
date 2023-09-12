import './App.css';
import { Routes, Route} from 'react-router-dom';
import Homepages from './Pages/Homepages';
import ChatPage from './Pages/ChatPage';

function App() {
  return (
    <div className="App">
          <Routes>
            <Route path='/' element={<Homepages/>}/>
            <Route path='/chats' element={<ChatPage/>}/>
          </Routes>
    </div>
  );
}

export default App;
