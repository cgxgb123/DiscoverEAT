import { useFavorites } from "../context/FavoritesContext.jsx";
import RecipeCard from "../components/RecipeCard.jsx";

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div className="container">
      <h1>My Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet. Go add some!</p>
      ) : (
        <div className="grid">
          {favorites.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
