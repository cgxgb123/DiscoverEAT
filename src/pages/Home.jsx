import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch.js";
import { Spinner, ErrorMessage } from "../components/Ui.jsx";

const Home = () => {
  const { data, loading, error } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="container">
      <h1>Categories</h1>
      <div className="grid">
        {data?.categories?.map((cat) => (
          <Link
            key={cat.idCategory}
            to={`/category/${cat.strCategory}`}
            className="category-card"
          >
            <img src={cat.strCategoryThumb} alt={cat.strCategory} />
            <h3>{cat.strCategory}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
