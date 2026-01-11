import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch.js";
import { useFavorites } from "../context/FavoritesContext.jsx";
import { Spinner, ErrorMessage } from "../components/Ui.jsx";

const RecipeDetail = () => {
  const { recipeId } = useParams();
  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
  );
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  const recipe = data?.meals ? data.meals[0] : null;
  if (!recipe) return <p>No recipe found.</p>;

  const favoriteStatus = isFavorite(recipe.idMeal);

  return (
    <div className="recipe-detail container">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <div className="info">
        <h1>{recipe.strMeal}</h1>
        <p>
          <strong>Category:</strong> {recipe.strCategory}
        </p>
        <p>
          <strong>Area:</strong> {recipe.strArea}
        </p>

        <button
          className={`btn ${favoriteStatus ? "btn-remove" : "btn-add"}`}
          onClick={() =>
            favoriteStatus
              ? removeFromFavorites(recipe.idMeal)
              : addToFavorites(recipe)
          }
        >
          {favoriteStatus ? "Remove from Favorites" : "Add to Favorites"}
        </button>

        <h3>Instructions</h3>
        <p>{recipe.strInstructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;
