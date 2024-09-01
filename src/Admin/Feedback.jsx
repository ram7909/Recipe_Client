import React, { useContext } from 'react'
import RecipeContext from '../context/RecipeContext'
import './feedback.css'
import { Link } from 'react-router-dom'
const Feedback = () => {
    const { feedback } = useContext(RecipeContext)
    return (
        <>
            <div className="main container">
                <div className="head">
                    <h2>FeedBack List</h2>
                </div>
                <div className="boxes  boxesss">
                        <p className="recipe-name">Name</p>
                        <p className="recipe-name">Phone</p>
                        <p className="recipe-name">Email</p>
                        <p className="recipe-name">Message</p>
                    </div>
                {feedback?.map((e) => <div key={e._id}>
                    <div className="boxes my-2 boxess">
                        <p className="recipe-name">{e.name}</p>
                        <p className="recipe-name">{e.phone}</p>
                        <p className="recipe-name">{e.email}</p>
                        <p className="recipe-name">{e.message}</p>
                    </div>
                </div>)}
                <Link to={'/admin'} className="btn adminbtn">Admin</Link>
            </div>
        </>
    )
}

export default Feedback