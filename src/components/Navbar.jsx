import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">RecipeApp</Link>
      </div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </nav>
  );
};

export default Navbar;
