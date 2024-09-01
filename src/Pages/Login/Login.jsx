import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './login.css'
import RecipeContext from '../../context/RecipeContext'
const Login = () => {
    const { login} = useContext(RecipeContext);
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData({ ...formData, [name]: value })
    }

    const { email, password } = formData


    const submitHandler = async (e) => {
        e.preventDefault();

        const result = await login(email, password)
        if (result.success) {
            setFormData({
                email: '',
                password: ''
            })
            navigate('/')


        }
    }
    return (
        <>

            <div className="login">
                <div className="head">
                    <h2>WELCOME BACK</h2>
                </div>
                <div className="main">
                    <img src="/login/Vector.png" alt="" />
                    <form onSubmit={submitHandler}>
                        <p>LOG IN</p>
                        <div className="mb-3">
                            <label className="form-label">Your Email address</label>
                            <input
                                type="email"
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                className="form-control"
                                required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
                                className="form-control"
                                required />
                        </div>
                        <div className="form-text"><u>Forgotten Your Password?</u></div>
                        <div className='button'>
                            <button type="submit" className="btn">LOG IN</button>
                            <Link to={'/signup'} className="btn">SIGN UP</Link>
                        </div>
                    </form>
                    <img src="/login/vector1.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Login