import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";


function App() {
  let [data,setData]=useState(()=>{
    if (!localStorage.recipes) {
    return RecipeData;
  } else {
    return JSON.parse(localStorage.getItem("recipes"));
  }
  });
  
  const [recipes, setRecipes] = useState(data);

  const createRecipe = (recipe) =>
    setRecipes((currentRecipes) => [...currentRecipes, recipe]);
  const deleteRecipe = (delID) =>
    setRecipes((currentList) =>
      currentList.filter((item, idx) => idx !== delID)
    );

    //edit component
  const editRecipe = ([editID, editedRecipe]) =>
    setRecipes((currentRecipes) =>
      currentRecipes.map((item, idx) => {
        let match = idx === editID;
        //editedRecipe
        if (match) item = { ...editedRecipe };
        return item;
      })
    );

  function handleClear(e) {
    e.preventDefault()
    localStorage.setItem("recipes", "[]");
    setRecipes(()=>JSON.parse(localStorage.getItem("recipes")))
  }

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem("recipes", JSON.stringify(recipes));
  };

  const handleFactoryReset = (e) =>{
    e.preventDefault();
    localStorage.removeItem('recipes')
    setRecipes(data)

  }

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      
        <RecipeList
          recipes={recipes}
          setRecipes={setRecipes}
          editRecipe={editRecipe}
          deleteRecipe={deleteRecipe} 
        />
     
      <RecipeCreate createRecipe={createRecipe} />
        
      <div id="button-container">
        <button name="save"onClick={handleSave}>
          Save List
        </button>
        <button name="clear" onClick={handleClear}>
          Clear List
        </button>
        <button name="factoryReset" onClick={handleFactoryReset}>
          Facory Reset
        </button>
      </div>
    </div>
  );
}

export default App;
