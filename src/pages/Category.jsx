import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch.js";
import RecipeCard from "../components/RecipeCard.jsx";
import { Spinner, ErrorMessage } from "../components/Ui.jsx";

const Category = () => {
  const { categoryName } = useParams();
  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
  );

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="container">
      <h1>{categoryName} Recipes</h1>
      <div className="grid">
        {data?.meals?.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Category;
