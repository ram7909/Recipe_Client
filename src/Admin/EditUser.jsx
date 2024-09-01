import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import RecipeContext from '../context/RecipeContext'
import axios from 'axios'
import { toast } from 'react-toastify'
const EditUser = () => {
    const { id } = useParams()
    const { url, admin } = useContext(RecipeContext)
    const [formData, setFormData] = useState({ isAdmin:false })
    const navigate = useNavigate()
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value === 'true' })
    }

    const { isAdmin } = formData

    const editUser = async (isAdmin) => {
        if (!admin) {
            return null
        }
        const api = await axios.put(`${url}/user/edit/${id}`, {
            isAdmin
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return api.data
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const result = await editUser(isAdmin)
        toast.success(result.message,{autoClose:1000})
        if(result.success){
            setFormData({
                isAdmin:''
            })
        }
        navigate('/admin/users')
    }


    return (
        <>
            <div className="add">
                <div className="head py-3">
                    <h2>MAKE ADMIN</h2>
                </div>
                <div className="main py-3">
                    <img src="/login/Vector.png" alt="" />
                    <form onSubmit={handleSubmit} style={{ width: '400px' }}>
                        <div className="mb-3">
                            <label className="form-label">Make or Remove Admin</label>
                            <select
                                name="isAdmin"
                                value={formData.isAdmin.toString()}
                                onChange={handleChange}
                                className="form-select"
                                aria-label="Default select example"
                                required>
                                <option value="" disabled>Select</option>
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>
                        </div>
                        <div className='button'>
                            <button type="submit" className="btn">Make Admin</button>
                        </div>
                    </form>
                    <img src="/login/vector1.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default EditUser