import React, { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    _id: '',
    name: '',
    description: '',
    ingredients: [''], // Start with one empty ingredient field
    cook_time: '',
    img: '',
    multiple_img: [''], // Start with one empty image field
    fat: '',
    carbs: '',
    protein: '',
    category: 'veg'
  });

  // Handle changes to input fields
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

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://your-api-endpoint.com/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(result => {
      console.log('Success:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  // Add new input fields
  const addField = (field) => {
    setFormData(prevState => ({
      ...prevState,
      [field]: [...prevState[field], '']
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>ID:</label>
        <input
          type="text"
          name="_id"
          value={formData._id}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Ingredients:</label>
        {formData.ingredients.map((ingredient, index) => (
          <input
            key={index}
            type="text"
            name="ingredients"
            value={ingredient}
            onChange={(e) => handleChange(e, index, 'ingredients')}
          />
        ))}
        <button type="button" onClick={() => addField('ingredients')}>Add Ingredient</button>
      </div>
      <div>
        <label>Cook Time:</label>
        <input
          type="text"
          name="cook_time"
          value={formData.cook_time}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Image URL:</label>
        <input
          type="text"
          name="img"
          value={formData.img}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Multiple Image URLs:</label>
        {formData.multiple_img.map((img, index) => (
          <input
            key={index}
            type="text"
            name="multiple_img"
            value={img}
            onChange={(e) => handleChange(e, index, 'multiple_img')}
          />
        ))}
        <button type="button" onClick={() => addField('multiple_img')}>Add Image URL</button>
      </div>
      <div>
        <label>Fat:</label>
        <input
          type="number"
          name="fat"
          value={formData.fat}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Carbs:</label>
        <input
          type="number"
          name="carbs"
          value={formData.carbs}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Protein:</label>
        <input
          type="number"
          name="protein"
          value={formData.protein}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Category:</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="veg">Vegetarian</option>
          <option value="non-veg">Non-Vegetarian</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
