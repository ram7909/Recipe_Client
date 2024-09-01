import React, { useContext, useState } from 'react'
import './signup.css'
import RecipeContext from '../../context/RecipeContext'
import { useNavigate } from 'react-router-dom';


//  name, email, phone, gender, password
const Signup = () => {
    const { register } = useContext(RecipeContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        gender: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const { name, email, phone, gender, password } = formData

    const submitHandler = async (e) => {
        e.preventDefault();

        const result = await register(name, email, phone, gender, password);

        if (result.success) {
            setFormData({
                name: '',
                email: '',
                phone: '',
                gender: '',
                password: ''
            })
            navigate('/login')
        }
    }

    return (
        <>
            <div className="sign-up">
                <div className="head">
                    <h2>WELCOME TO ACTIVE BISTRO</h2>
                </div>
                <div className="main">
                    <img src="/login/Vector.png" alt="" />
                    <form onSubmit={submitHandler}>
                        <p>SIGN UP</p>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                className="form-control"
                                required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input
                                type="email"
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                className="form-control"
                                required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone Number</label>
                            <input
                                type="number"
                                name='phone'
                                value={formData.phone}
                                onChange={handleChange}
                                className="form-control"
                                required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Gender</label>
                            <select className="form-select" aria-label="Default select example" required
                                name='gender'
                                value={formData.gender}
                                onChange={handleChange}
                            >
                                <option value="" disabled>Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                name='password'
                                className="form-control"
                                required />
                        </div>
                        <div className='button'>
                            <button type="submit" className="btn sign">SIGN UP</button>
                        </div>
                    </form>
                    <img src="/login/vector1.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Signup