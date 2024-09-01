import React, { useContext, useState } from 'react';
import RecipeContext from '../context/RecipeContext';
import './adminAdd.css'
import { Link } from 'react-router-dom'
const AdminAdd = () => {
    const { addRecipe } = useContext(RecipeContext)
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        ingredients: [''],
        cook_time: '',
        img: '',
        fat: '',
        carbs: '',
        protein: '',
        category: '',
        multiple_img: ['']
    });

    const handleChange = (e, index, field) => {
        const { name, value } = e.target;
        if (name === 'ingredients') {
            const updatedIngredients = [...formData.ingredients];
            updatedIngredients[index] = value;
            setFormData({
                ...formData,
                ingredients: updatedIngredients
            });
        } else if (name === 'multiple_img') {
            const updatedImages = [...formData.multiple_img];
            updatedImages[index] = value;
            setFormData({
                ...formData,
                multiple_img: updatedImages
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const { name, description, ingredients, cook_time, img, fat, carbs, protein, category, multiple_img } = formData

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)

        const result = await addRecipe(name, description, ingredients, cook_time, img, fat, carbs, protein, category, multiple_img)
        alert(result.message)
        if (result.success) {
            setFormData({
                name: '',
                description: '',
                ingredients: [''],
                cook_time: '',
                img: '',
                fat: '',
                carbs: '',
                protein: '',
                category: '',
                multiple_img: ['']
            })
        }


    };

    const addField = (field) => {
        setFormData(prevState => ({
            ...prevState,
            [field]: [...prevState[field], '']
        }));
    };

    return (
        <div className="add">
            <div className="head py-3">
                <h2>ADD RECIPE</h2>
            </div>
            <div className="main py-3">
                <img src="/login/Vector.png" alt="" />
                <form onSubmit={handleSubmit} style={{ width: '400px' }}>
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
                        <label className="form-label">Description</label>
                        <input
                            type='text'
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Ingredients <span className='instruction'>* Every new Ingredients in new input field *</span></label>
                        {formData.ingredients.map((ingredient, index) => (
                            <input
                                className="form-control my-2"
                                key={index}
                                type="text"
                                name="ingredients"
                                value={ingredient}
                                required
                                onChange={(e) => handleChange(e, index, 'ingredients')}
                            />
                        ))}
                        <button type="button" onClick={() => addField('ingredients')}>Add Ingredient</button>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Cook Time  <span className='instruction'>* In minutes *</span></label>
                        <input
                            className="form-control"
                            required
                            type="number"
                            name="cook_time"
                            value={formData.cook_time}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Img URL</label>
                        <input
                            type="text"
                            name="img"
                            value={formData.img}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Multiple Img <span className='instruction'>* Every new image URL write in new input field*</span></label>
                        {formData.multiple_img.map((img, index) => (
                            <input
                                className="form-control my-2 "
                                key={index}
                                type="text"
                                name="multiple_img"
                                value={img}
                                required
                                onChange={(e) => handleChange(e, index, 'multiple_img')}
                            />
                        ))}
                        <button type="button" onClick={() => addField('multiple_img')}>Add Image URL</button>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Fat <span className='instruction'>* In gram *</span></label>
                        <input
                            type="number"
                            name="fat"
                            value={formData.fat}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Carbs <span className='instruction'>* In gram *</span></label>
                        <input
                            type="number"
                            name="carbs"
                            value={formData.carbs}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Protein <span className='instruction'>* In gram *</span></label>
                        <input
                            className="form-control"
                            required
                            type="number"
                            name="protein"
                            value={formData.protein}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Category</label>
                        <select name="category"
                            value={formData.category}
                            onChange={handleChange} className="form-select" aria-label="Default select example" required>
                            <option disabled>Select</option>
                            <option value="veg">Veg</option>
                            <option value="non_veg">Non Veg</option>
                            <option value="sweet">Sweet</option>
                        </select>
                    </div>

                    <div className='button'>
                        <Link to={'/admin'} type="submit" className="btn">Add Recipe</Link>
                    </div>
                </form>
                <img src="/login/vector1.png" alt="" />
            </div>
        </div>
    );
};

export default AdminAdd;
