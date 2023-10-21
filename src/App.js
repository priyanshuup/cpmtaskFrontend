import logo from './logo.svg';
import './App.css';

// components here

import Navbar from './components/Navbar';
import CpmHomepage from './components/CpmHomepage';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<CpmHomepage />}/>
        <Route path="/all" element={<AllUsers />}/>
        <Route path="/add" element={<AddUser />}/>
        <Route path='/edit/:id'element={<EditUser />}/>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
