import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import VotePage from './pages/VotePage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={ <LoginPage /> }/>
          <Route path='/main' element={ <MainPage /> }/>
          <Route path='/vote' element={ <VotePage />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
