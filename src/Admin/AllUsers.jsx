import React, { useContext } from 'react'
import RecipeContext from '../context/RecipeContext'
import './alluser.css'
import { Link } from 'react-router-dom'
const AllUsers = () => {
    const { allUser } = useContext(RecipeContext)
    return (
        <>
            <div className="admin">
                <div className="main container">
                    <div className="head">
                        <h2>User List</h2>
                    </div>
                    <div className="user">
                        {allUser?.map((e) => <div key={e._id}>
                            <div className="box my-3 p-2">
                                <div className="min-box min">
                                    <p className="recipe-name">{e.name}</p>
                                    <p className="recipe-name">{e.email}</p>
                                </div>
                                <div className="buttons">
                                    {!e.isAdmin && (
                                        <>
                                            <Link to={`/admin/user/${e._id}`} className="btn edit">Make Admin</Link>
                                        </>
                                    )}
                                    {e.isAdmin && (
                                        <>
                                            <Link to={`/admin/user/${e._id}`} className="btn edit">Remove Admin</Link>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>)}
                    </div>

                    <Link to={'/admin'} className="btn adminbtn">
                        Admin
                    </Link>
                </div>
            </div>

        </>
    )
}

export default AllUsers