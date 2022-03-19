import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  let data;
  if (!localStorage.recipes) {
    data = RecipeData;
  } else {
    data = JSON.parse(localStorage.getItem("recipes"));
  }
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

  function handleClear() {
    localStorage.setItem("recipes", "[]");
    setRecipes(()=>JSON.parse(localStorage.getItem("recipes")))
  }
  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem("recipes", JSON.stringify(recipes));
  };

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      {!localStorage.recipes !== undefined && (
        <RecipeList
          recipes={recipes}
          setRecipes={setRecipes}
          editRecipe={editRecipe}
          deleteRecipe={deleteRecipe}
        />
      )}
      <RecipeCreate createRecipe={createRecipe} />
      <div id="button-container">
        <button name="save" onClick={handleSave}>
          Save List
        </button>
        
        <button name="clear" onClick={handleClear}>
          Clear List
        </button>
      </div>
    </div>
  );
}

export default App;
