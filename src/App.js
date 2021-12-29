import React,{useState} from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes ,
  Route
} from "react-router-dom";
import Detail from './components/Detail';
import Login from './components/Login';

function App() {

  const [user, setUser] = useState()

  return (
      <Router>
        <Header />

          <Routes >  
            <Route path='/' element={<Home />} />
            <Route path='/detail' element={<Detail />} />
            <Route path='/login' element={<Login />} />
          </Routes>

      </Router>
  );
}

export default App;
