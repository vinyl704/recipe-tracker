import React, { useState } from "react";

function RecipeCreate({createRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const initialFormState ={
    name:'',
    cuisine:'',
    photo:'',
    ingredients:'',
    preparation:'',
  }
  const [formData, setFormData] = useState({...initialFormState})

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(formData)
    createRecipe(formData)
    setFormData({...initialFormState})
  }
  const handleChange = ({target}) =>{setFormData({...formData,[target.name]:target.value})}
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td><input type="text" name="name" id="name" onChange={handleChange} placeholder="Name" value={formData.name} required/></td>
            <td><input type="text" name="cuisine" id="cuisine" onChange={handleChange} placeholder="Cuisine" value={formData.cuisine} required/></td>
            <td><input type="url" name="photo" id="photo" onChange={handleChange} placeholder="URL" value={formData.photo} /></td>
            <td><textarea name="ingredients" onChange={handleChange} placeholder="Ingredients" value={formData.ingredients} required></textarea></td>
            <td><textarea name="preparation" onChange={handleChange} placeholder="Preparation" value={formData.preparation} required></textarea></td>
            
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
