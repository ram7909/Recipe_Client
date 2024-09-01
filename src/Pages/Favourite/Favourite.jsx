import React, { useContext } from 'react'
import RecipeContext from '../../context/RecipeContext'
import { Link } from 'react-router-dom'
import './favourite.css'
const Favourite = () => {
    const { favourite,removeFavouriteRecipe,clearAllFavouriteRecipe } = useContext(RecipeContext)
    return (
        <div className='favourite'>
            <div className="head py-3">
                <h2>Your Favourite Recipe</h2>
            </div>
            <div className="container py-2">
                {favourite?.items?.map((e) => <div key={e._id}>
                    <div className="card mb-3" style={{ maxWidth: '540px' }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={e.img} className="img-fluid rounded-start" alt="recipe-img" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{e.name}</h5>
                                    <p className="card-text text-body-secondary">{e.description}</p>
                                    <div className="buttons">
                                        <Link to={`/recipeDetail/${e.recipeId}`} className='btn mx-2'>See Recipe</Link>

                                        <button className='btn mx-2' onClick={()=> removeFavouriteRecipe(e.recipeId)}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>
            <div className="btns py-3 ">
                <button className="btn" onClick={clearAllFavouriteRecipe}>Remove All Favourite Recipe's</button>
            </div>
        </div>
    )
}

export default Favourite