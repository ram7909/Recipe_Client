import React, { useContext } from 'react'
import RecipeContext from '../../context/RecipeContext'
import { Link, useNavigate } from 'react-router-dom'
import './profile.css'
const Profile = () => {
    const { profile, setIsAuthenticate, setToken, admin } = useContext(RecipeContext)
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem('token')
        setIsAuthenticate(false)
        setToken('')
        navigate('/')
    }
    return (
        <>
            <div className="profile">
                <div className="head py-3">
                    <h2>PROFILE</h2>
                </div>
                <div className="main py-4">
                    <img src="/login/Vector.png" alt="" />
                    <div className="card" style={{ width: '19rem' }}>
                        <div className="card-body">
                            <h6>My Information</h6>
                            <div className="box">
                                <p className="card-text"><span>Name :</span> {profile.name}</p>
                                <p className="card-text"><span>Email :</span> {profile.email}</p>
                                <p className="card-text"><span>Phone Number :</span> {profile.phone}</p>
                                <p className="card-text"><span>Gender :</span> {profile.gender}</p>

                            </div>
                            <div className="button py-3">
                                {admin && (
                                    <Link to={'/admin'} className='btn mx-1'>Admin</Link>
                                )}
                                <button className="btn mx-1" onClick={logout}>LOG OUT</button>
                            </div>
                        </div>
                    </div>
                    <img src="/login/vector1.png" alt="" />
                </div>
            </div>

        </>
    )
}

export default Profile