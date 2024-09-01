import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Pages/Home/Home.jsx'
import Login from './Pages/Login/Login.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer/Footer.jsx'
import Signup from './Pages/Signup/Signup.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import Profile from './Pages/Profile/Profile.jsx'
import RecipeDetail from './Pages/RecipeDetail/RecipeDetail.jsx'
import Favourite from './Pages/Favourite/Favourite.jsx'
import AdminRecipe from './Admin/AdminRecipe.jsx'
import AddRecipe from './Admin/AdminAdd.jsx'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditRecipe from './Admin/EditRecipe.jsx'
import AllUsers from './Admin/AllUsers.jsx'
import EditUser from './Admin/EditUser.jsx'
import Feedback from './Admin/Feedback.jsx'

const App = () => {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/contact' element={<Contact />} /> 
        <Route path='/login' element={<Login />} /> 
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/recipeDetail/:id' element={<RecipeDetail />} />
        <Route path='/favourite' element={<Favourite />} />
        <Route path='/admin' element={<AdminRecipe />} />
        <Route path='/admin/add' element={<AddRecipe />} /> 
        <Route path='/admin/edit/:id' element={<EditRecipe />} /> 
        <Route path='/admin/users' element={<AllUsers />} /> 
        <Route path='/admin/user/:id' element={<EditUser />} /> 
        <Route path='/admin/feedback' element={<Feedback />} /> 
      </Routes>
      <Footer />
    </Router>
  )
}

export default App