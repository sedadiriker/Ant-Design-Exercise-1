import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import HomePage from '../components/HomePage'
import UserForm from '../components/UserForm'
import UserList from '../components/UserList'
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/user-form" Component={UserForm}/>
        <Route path="/user-list" Component={UserList}/>      
      </Routes>
    </Router>
  )
}

export default AppRouter
