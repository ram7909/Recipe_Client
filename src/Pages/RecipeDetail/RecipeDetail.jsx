import React, { useContext, useEffect, useState } from 'react'
import './recipeDetail.css'
import { useParams } from 'react-router-dom'
import RecipeContext from '../../context/RecipeContext'
import axios from 'axios'

const RecipeDetail = () => {
    const { id } = useParams()
    const { url,addToFavourite } = useContext(RecipeContext)
    const [index, setIndex] = useState(0)
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const api = await axios.get(`${url}/reciepe/get/${id}`)
                setData(api.data.reciepe)
            } catch (error) {
                console.log("Error In Fetching Data");
            }
        }
        fetchRecipe();
    }, [id, url])

    const prevIndex = index - 1;
    const nextIndex = index + 1;

    return (
        <>
            <div className="recipeDetail">
                <div className="head py-3">
                    <h2>Recipe Deatil</h2>
                </div>
                <div className="main py-4">
                    <img className='i' src="/login/Vector.png" alt="" />
                    {data.map((e) =>
                        <div key={e._id}>
                            <div className="card" style={{ width: '30rem' }}>
                                <div className="imgs">
                                    <img src={e.multiple_img[index]} className="card-img-top" alt="..." />
                                </div>
                                <div className="buttons my-2">
                                    <div className="btn" onClick={() => {
                                        if (0 < index) {
                                            setIndex(index - 1);
                                        }
                                        else {
                                            setIndex(e.multiple_img.length - 1)
                                        }
                                    }}><i className="fa-solid fa-arrow-left"></i></div>
                                    <div className="img">
                                        <img className='left' src={e.multiple_img[prevIndex < 0 ? e.multiple_img.length - 1 : prevIndex]} alt="" />
                                    </div>
                                    <div className="img middle">
                                        <img className='mid' src={e.multiple_img[index]} alt="" />
                                    </div>
                                    <div className="img">
                                        <img className='right' src={e.multiple_img[nextIndex > e.multiple_img.length - 1 ? 0 : nextIndex]} alt="" />
                                    </div>
                                    <div className="btn" onClick={() => {
                                        if (index < e.multiple_img.length - 1) {
                                            setIndex(index + 1);
                                        }
                                        else {
                                            setIndex(0)
                                        }
                                    }}><i className="fa-solid fa-arrow-right"></i></div>
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title">{e.name}</h5>
                                    <p className="card-text"><span>Description :</span> {e.description}</p>
                                    <p className="card-text"><span>Ingredients :</span> {e.ingredients.join(' , ')}
                                    </p>
                                    <p className="card-text"><span>Fat :</span> {e.fat}g</p>
                                    <p className="card-text"><span>Carbs :</span> {e.carbs}g</p>
                                    <p className="card-text"><span>Protien :</span> {e.protein}g</p>
                                    <p className="card-text"><span>Cook Time :</span> {e.cook_time}</p>
                                    <p className="card-text"><span>Category : </span>{e.category}</p>
                                    <div className="button">
                                        <button className="btn btn-primary" onClick={()=>
                                            addToFavourite(e._id,e.name,e.img,e.description)
                                        }>Add To Favourite</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    )}

                <img className='i' src="/login/vector1.png" alt="" />
            </div>
        </div >

        </>
    )
}

export default RecipeDetail