import logo from './logo.svg';
import './App.css';
import Registration from './registration';
import EditPage from './EditPage'
import {BrowserRouter, Route,Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registration/>}></Route>
          <Route path="/edit" element={<EditPage/>}></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
