import React, { useContext, useState } from 'react'
import RecipeContext from '../context/RecipeContext'
import './adminRecipe.css'
import { Link, useNavigate } from 'react-router-dom'
const AdminRecipe = () => {
    const { data, deleteRecipeByID, setIsAuthenticate, setToken, fetchUserFeedback } = useContext(RecipeContext)

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem('token')
        setIsAuthenticate(false)
        setToken('')
        navigate('/')
    }
    return (
        <>
            <div className="admin">
                <nav>
                    <div className="left">
                        <img src="/logo.png" alt="" />
                    </div>
                    <div className="right">
                        <button className="hamburger" onClick={toggleMenu}>
                            <i className="fa-solid fa-bars"></i>
                        </button>
                        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                            <Link to={'/admin/users'} className='btn'>All Users</Link>
                            <Link to={'/admin/feedback'} className='btn'>Feedbacks</Link>
                            <Link to={'/profile'} className='btn'>Profile</Link>
                            <Link to={'/admin/add'} className='btn'>Add Recipe </Link>
                            <button className='btn' onClick={logout}>LOGOUT </button>
                        </div>
                    </div>
                </nav>
                <div className="main container">
                    <div className="head">
                        <h2>Recipe List</h2>
                    </div>
                    {data?.map((e) => <div key={e._id}>
                        <div className="box my-3">
                            <div className="min-box">
                                <div className="img">
                                    <img src={e.img} alt="recipe-img" />
                                </div>
                                <p className="recipe-name">{e.name}</p>
                            </div>
                            <div className="buttons">
                                <Link to={`/admin/edit/${e._id}`} className="btn edit">Edit</Link>
                                <button className="btn delete" onClick={() =>
                                    deleteRecipeByID(e._id)}
                                >Delete</button>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </>
    )
}

export default AdminRecipe