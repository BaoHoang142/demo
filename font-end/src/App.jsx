import React from 'react'
import Body from './pages/body/Body'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import ManagerCategory from './pages/admin/managerCategory/ManagerCategory'
import ManagerAdmin from './pages/admin/managerAdmin/ManagerAdmin'
import ManagerUser from './pages/admin/managerUser/ManagerUser'
import ManagerProduct from './pages/admin/managerProduct/ManagerProduct'

export default function App() {
  return (
    <>
     <Routes>
        <Route path='/' element={<Body/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/adminCategory' element={<ManagerCategory/>}/>
        <Route path='/admin' element={<ManagerAdmin/>}/>
        <Route path='/adminUser' element={<ManagerUser/>}/>
        <Route path='/adminProduct' element={<ManagerProduct/>}/>

     </Routes>

    </>
  )
}
