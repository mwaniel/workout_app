import React from 'react';
import {Route , Routes} from  'react-router-dom';
import {Box} from '@mui/material';


import './App.css'; 
import Navbar from './componets/Navbar';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Footer from './componets/Footer';

const App = () => {
  return (
    <Box width='400px'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/exercise/:id" element={<ExerciseDetail/>} /> 
      </Routes>
      <Footer/>
    </Box>
  )
};

export default App;