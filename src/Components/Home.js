import React from 'react'
import Form from './Form'
import Register from './Register'
import Alert from './Alert'
import { useGlobalContext } from './context'
import {Routes,Route } from 'react-router-dom'
import ForgotPass from './ForgotPass'
import List from './List'


const Home = () => {
  let {alertcomp} = useGlobalContext();
  return (
    <>
      {
        alertcomp && <Alert title = "You have signed in succesfully. Go to sign in page" typeOf = "success"/>
      }
      <Routes>
        <Route path="/" element={<Form/>}/>
        <Route path="/register" element={<Register/>} />
        <Route path="/ForgotPassword" element={<ForgotPass/>} />
        <Route path= {"/Link/:id"} element={<List/>} />
        
      </Routes>
    </>
  )
}

export default Home
