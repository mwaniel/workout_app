import React,{useState,useEffect} from 'react';
import {Box,Button,Typography,TextField,Stack} from '@mui/material';
import { fetchData,exercisesOptions } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';




const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {
    const [search,setSearch] = useState('');
    
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(()=>{
        const fetchExercisesData =async () => {
            const bodyPartsData = await fetchData ('https://exercisedb.rapidapi.com/exercises/bodyPartList',exercisesOptions);
            setBodyParts(['all',...bodyPartsData]);
        }
        fetchExercisesData();
    },[])

    const handleSearch = async () =>{
        if(search){
            const exercisesData = await fetchData('https://exercisedb.rapidapi.com/exercises/bodyPartList',exercisesOptions); 
            const searchExercises= exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)||
                exercise.target.toLowerCase().includes(search)||
                exercise.equipment.toLowerCase().includes(search)||
                exercise.bodyPart.toLowerCase().includes(search)
            ); 
            setSearch('');
            setExercises(searchExercises);    
        }
    }
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
                value={search}
                onChange={(e)=>setSearch(e.target.value.toLowerCase())}
                placeholder='Search Exercises'
                type='text'
                sx={{
                    input:{fontWeight:'700',border:'none',borderRadius:'4px'},
                    width:{lg:'1170px',xs:'350px'},
                    backgroundColor:'#FFF',
                    borderRadius:'40px'
                }}
            />
            <Button 
            className="search-btn"
            sx={{
                    backgroundColor:'#FF2625',
                    color:'#fff',
                    textTransform:'none',
                    width:{lg:'175px',xs:'100px'},
                    fontSize:{lg:'1px',xs:'12px'},
                    height:'56px',
                    position:'absolute',
                    right:'0'
                 }}
            onClick ={handleSearch}    
            >
                Search
            </Button>
        </Box>
        <Box sx={{position:'relative' ,width:'100%',p: '20px'}} >
                 <HorizontalScrollbar data={bodyParts}
                 bodyPart={bodyPart} setBodyPart={setBodyPart}
                 />
        </Box>
    </Stack>
  );
}

export default SearchExercises;
