import { Box } from '@mui/material'
import React, { useState } from 'react'
import { Exercises, HeroBanner, SearchExercises } from '../components'

const Home = () => {
const [bodyPart,setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner/>
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises/>
    </Box>
  )
}

export default Home
