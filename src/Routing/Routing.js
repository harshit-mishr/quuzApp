import React from 'react'
import HomePage from '../Pages/HomePage/HomePage'
import CricketPage from '../Pages/CricketPage/CricketPage'
import BollywoodPage from '../Pages/BollywoodPage/BollywoodPage'
import ITPage from '../Pages/ITPage/ITPage'
import {Routes , Route} from 'react-router-dom'

export default function Routing(){
  return(
    <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/cricket' element={<CricketPage/>} />
    <Route path='/bollywood' element={<BollywoodPage/>} />
    <Route path='/it' element={<ITPage/>} />
    </Routes>
  )
}