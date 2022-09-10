import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Home } from '../components/Home';

export const MainRoute = () => {
  return (
    <div>
   <Routes>
   <Route path='/' element={<Home/>}/>

 
   </Routes>
    </div>
  )
}
