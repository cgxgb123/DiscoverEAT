import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Category from "./pages/Category.jsx";
import RecipeDetail from "./pages/RecipeDetail.jsx";
import Favorites from "./pages/Favorites.jsx";
import Search from "./pages/Search.jsx";
import "./App.css";

function App() {
  return (
    <FavoritesProvider>
      <Navbar />
      <img src="./200.gif" className="banner" typeof="image/gif" />
      <Routes>
        <Route path="/DiscoverEAT" element={<Home />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </FavoritesProvider>
  );
}

export default App;
