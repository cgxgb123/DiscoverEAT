import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch.js";
import RecipeCard from "../components/RecipeCard.jsx";
import { Spinner, ErrorMessage } from "../components/Ui.jsx";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
  );

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="container">
      <h1>Search Results for "{query}"</h1>
      <div className="grid">
        {data?.meals ? (
          data.meals.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
