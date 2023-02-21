import React,{useState} from 'react';
import {Box} from '@mui/material';
import Exercises from '../componets/Exercises';
import SearchExercises from '../componets/SearchExercises';
import HeroBanner from '../componets/HeroBanner';

const Home = () => {
  return (
   <Box>
    <HeroBanner/>
    <SearchExercises/>
    <Exercises />
   </Box>
  );
}

export default Home;
