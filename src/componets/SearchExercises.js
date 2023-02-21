import React,{useState,useEffect} from 'react';
import {Box,Button,Typography,TextField,Stack} from '@mui/material';




const SearchExercises = () => {
  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
        <Typography 
            fontWeight={700}
            sx={{fontSize:{lg:'44px',xs:'30px'}}}
            mb='50px'
            textAlign='center'
        >
            Awesome Exercises You <br /> Should Know
        </Typography>
        <Box position='relative'mb='72px'>
            <TextField
                height='76px'
                value=''
                onChange={(e)=>{}}
                placeholder='Search Exercises'
                type='text'
                sx={{
                    input:{fontWeight:'700',border:'none',borderRadius:'4px'},
                    width:{lg:'1170px',xs:'350px'},
                    backgroundColor:'#FFF',
                    borderRadius:'40px'
                }}
            />
            <Button className='search-btn'>
                Search
            </Button>
        </Box>
    </Stack>
  );
}

export default SearchExercises;
