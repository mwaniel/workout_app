import React,{useEffect,useState} from 'react';
import { Pagination } from '@mui/material';
import {Box,Stack,Typography} from '@mui/material';

import { exercisesOptions,fetchData } from '../utils/fetchData';

const Exercises = ({exercises,setExercises,bodypart}) => {
  return (
    <Box 
        id='exercises'
        sx={{
            mt:{lg:'110px'}
        }}
        mt='50px'
        p='20px'
        >
        <Typography variant='h3' mb='46px' >
            Showing results
        </Typography>
        <stack direction='row' sx={{gap:{lg:'110px',xs :'50px'}}}
        flexWrap='wrap' justifyContent='center'
        >
        </stack>
    </Box>
  )
}

export default Exercises