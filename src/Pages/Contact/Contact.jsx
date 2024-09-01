import React, { useContext, useState } from 'react'
import './contact.css'
import RecipeContext from '../../context/RecipeContext'
const Contact = () => {
    const { addFeedback } = useContext(RecipeContext)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const { name, phone, email, message } = formData

    const handleSubmit = async (e) => {
        e.preventDefault();
        let result = await addFeedback(name, phone, email, message)
        if (result.success) {
            setFormData({
                name: '',
                phone: '',
                email: '',
                message: ''
            })
        }
    }

    return (
        <>
            <div className="contact">
                <div className="head my-2 py-2">
                    <h2>Write  To  Us</h2>
                </div>
                <div className="main py-4">
                    <div className="card" style={{ width: '18rem' }}>
                        <h6>Get In Touch</h6>
                        <div className="box box-1">
                            <p>Phone</p>
                            <a href=''>01382 722 026</a>
                            <p>Email</p>
                            <a href=''>support@activebistro.co.uk</a>
                        </div>
                        <h6 className='mt-3'>Visit Us</h6>
                        <div className="box box-2">
                            <p>Location</p>
                            <a href="">Unit 14 Marybank Lane, Dundee. DD2 3DY</a>
                        </div>
                    </div>
                    <div className="card" style={{ width: '18rem' }}>
                        <h6>What can we help with?</h6>
                        <form onSubmit={handleSubmit}>
                            <div >
                                <label className="form-label">Name</label>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    value={formData.name}
                                    name='name'
                                    className="form-control"
                                    placeholder='Enter your name' />
                            </div>
                            <div>
                                <label className="form-label">Phone</label>
                                <input
                                    type="number"
                                    onChange={handleChange}
                                    value={formData.phone}
                                    name='phone'
                                    className="form-control"
                                    placeholder='9185xxxxxx' />
                            </div>
                            <div>
                                <label className="form-label">Email address</label>
                                <input
                                    type="email"
                                    onChange={handleChange}
                                    value={formData.email}
                                    name='email'
                                    className="form-control" placeholder='Enter your email address' />
                            </div>
                            <div>
                                <label className="form-label">Your Message</label>
                                <textarea className="form-control"
                                    onChange={handleChange}
                                    value={formData.message}
                                    name='message' placeholder='Your message'></textarea>
                            </div>
                            <div id='btn' className='mt-3'>
                                <button type="submit" className="btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact