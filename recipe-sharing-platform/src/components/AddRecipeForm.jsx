import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !ingredients || !steps) {
      setError("All fields are required");
      return;
    }

    const newRecipe = {
      id: Date.now(),
      title,
      summary: steps.split("\n")[0],
      ingredients: ingredients.split("\n"),
      instructions: steps.split("\n"),
    };

    const stored = JSON.parse(localStorage.getItem("recipes") || "[]");
    localStorage.setItem("recipes", JSON.stringify([newRecipe, ...stored]));

    navigate(`/recipe/${newRecipe.id}`);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Add New Recipe</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Recipe Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <textarea
          placeholder="Ingredients (one per line)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full border p-2 rounded h-32"
        />
        <textarea
          placeholder="Preparation Steps (one per line)"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full border p-2 rounded h-32"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}
