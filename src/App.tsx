import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserPage from './components/UserPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
