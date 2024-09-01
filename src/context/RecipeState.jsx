import React, { useEffect, useState } from 'react'
import RecipeContext from './RecipeContext'
import axios from 'axios'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RecipeState = (props) => {
  const url = 'https://recipe-api-ll0n.onrender.com'
  const [data, setData] = useState([])
  const [filterData, setFilterData] = useState(data)
  const [isAuthenticate, setIsAuthenticate] = useState(false)
  const [token, setToken] = useState('')
  const [profile, setProfile] = useState({})
  const [favourite, setFavourite] = useState({})
  const [reload, setReload] = useState(false)
  const [admin, setAdmin] = useState(Boolean)
  const [allUser, setAllUser] = useState([])
  const [feedback, setFeedback] = useState([])
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const api = await axios.get(`${url}/reciepe/get`)
        setData(api.data.reciepe)
        setFilterData(api.data.reciepe)
      } catch (error) {
        console.log("Error In Fetching Data");
      }
    }
    fetchRecipe();

  }, [])

  // User Register
  const register = async (name, email, phone, gender, password) => {
    const api = await axios.post(`${url}/user/register`, {
      name, email, phone, gender, password
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    toast.success(api.data.message, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    return api.data
  }

  // User Login
  const login = async (email, password) => {
    const api = await axios.post(`${url}/user/login`, {
      email,
      password
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    if (api.data.token) {
      localStorage.setItem('token', api.data.token)
      setIsAuthenticate(true)
      setToken(api.data.token)
    }
    toast.success(api.data.message, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    return api.data
  }

  // Profile
  useEffect(() => {
    const tokenFromLocalStorage = localStorage.getItem('token')
    if (tokenFromLocalStorage) {
      setToken(tokenFromLocalStorage)
      setIsAuthenticate(true);
    }

    const fetchprofileFromAPI = async () => {
      const api = await axios.get(`${url}/user/profile`, {
        headers: {
          "Content-Type": "application/json",
          auth: token
        }
      })
      setProfile(api.data)
      setAdmin(api.data.isAdmin)
    };
    fetchprofileFromAPI();
    favouriteRecipe();
  }, [token])


  // Filter By Category
  const searchByCategory = (category) => {
    if (category == '') {
      setFilterData(data)
    }
    else {
      const filteredData = data.filter((c) => c.category === category)
      setFilterData(filteredData)
    }
  }

  // Add to favourite
  const addToFavourite = async (recipeId, name, img, description) => {
    const api = await axios.post(`${url}/favourite/add`, {
      recipeId, name, img, description
    }, {
      headers: {
        "Content-Type": "application/json",
        auth: token
      }
    })
    setReload(!reload)
    toast.success(api.data.message, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    return api.data
  }

  // Fetch Recipes of Favourite Page
  const favouriteRecipe = async () => {
    const api = await axios.get(`${url}/favourite/get`, {
      headers: {
        "Content-Type": "application/json",
        auth: token
      }
    })
    setReload(!reload)
    setFavourite(api.data.favourite)

  }

  // Remove Recipe From Favourite Page
  const removeFavouriteRecipe = async (id) => {
    const api = await axios.delete(`${url}/favourite/remove/${id}`, {
      headers: {
        "Content-Type": "application/json",
        auth: token
      }
    })
    setReload(!reload)
    setFavourite(api.data.favourite)
  }

  // Clear All Recipe From Favourite Page
  const clearAllFavouriteRecipe = async () => {
    const api = await axios.delete(`${url}/favourite/clear`, {
      headers: {
        "Content-Type": "application/json",
        auth: token
      }
    })
    setReload(!reload)
    setFavourite(api.data.favourite)
    toast.success(api.data.message, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  }


  // Delete Recipe By ID
  const deleteRecipeByID = async (id) => {
    if (!admin) {
      return toast.error('Access Denied', { autoClose: 1000 })
    }
    const api = await axios.delete(`${url}/reciepe/delete/${id}`, {
      headers: {
        "Content-Type": "application/json",
        auth: token
      }
    })
    setReload(!reload)
    setData(api.data.favourite)

    toast.success(api.data.message, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    })
  }

  // Add Recipe
  const addRecipe = async (name, description, ingredients, cook_time, img, fat, carbs, protein, category, multiple_img) => {
    if (!admin) {
      return toast.error('Access Denied', { autoClose: 1000 })
    }
    const api = await axios.post(`${url}/reciepe/add`, {
      name, description, ingredients, cook_time, img, fat, carbs, protein, category, multiple_img
    }, {
      headers: {
        "Content-Type": "application/json",
        auth: token
      }
    })
    setReload(!reload)
    setData(api.data.favourite)

    toast.success(api.data.message, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    })

    return api.data
  }

  // Get All Users
  useEffect(() => {
    const fetchUserFromAPI = async () => {
      try {
        let api = await axios.get(`${url}/user/users`)
        setAllUser(api.data.user)
      } catch (error) {
        console.log("Error In Fetching Data");
      }
    }
    fetchUserFromAPI()
  }, [setReload, allUser])


  // delete User
  const deleteUserByID = async (id) => {
    if (!admin) {
      return toast.error('Access Denied', { autoClose: 1000 })
    }
    const api = await axios.delete(`${url}/user/delete/${id}`, {
      headers: {
        "Content-Type": "application/json",
        auth: token
      }
    })
    setReload(!reload)
    setAllUser(api.data.user)
    toast.success(api.data.message, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    })
  }


  // Add FeedBack
  const addFeedback = async (name, phone, email, message) => {
    const api = await axios.post(`${url}/feedback/add`, {
      name, phone, email, message
    }, {
      headers: {
        "Content-Type": "application/json",
        auth: token
      }
    })
    setReload(!reload)
    toast.success(api.data.message, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    })
    return api.data
  }


  // See All FeedBack
useEffect(() => {
  const fetchUserFeedback = async () =>{
      const api = await axios.get(`${url}/feedback/get`, {
        headers: {
          "Content-Type": "application/json",
          auth: token
        }
      })
      setReload(!reload)
      setFeedback(api.data.feedback);
      return api.data
  }
  fetchUserFeedback()
}, [feedback])










  return (
    <RecipeContext.Provider value={{ feedback,addFeedback, deleteUserByID, allUser, admin, addRecipe, deleteRecipeByID, clearAllFavouriteRecipe, removeFavouriteRecipe, favourite, addToFavourite, url, data, searchByCategory, filterData, register, login, profile, setIsAuthenticate, setToken, isAuthenticate }}>
      {props.children}
    </RecipeContext.Provider>
  )
}

export default RecipeState