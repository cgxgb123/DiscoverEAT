# DiscoverEAT

![DiscoverEAT](./public/200.gif)

## Description

DiscoverEAT is a responsive, single-page React application designed to help users explore culinary inspiration. Leveraging **TheMealDB API**, the application allows users to browse recipe categories, search for specific meals, and view detailed cooking instructions. It features a robust state management system that allows users to save their favorite recipes, which persist across browser sessions using LocalStorage.

## Table of Contents

- [Technologies Used](#technologiesused)
- [Features](#features)
- [Future Features](#nextsteps)
- [Deployed App](#deployment)
- [Reflection](#reflection)
- [About the Author](#author)

## <a name="technologiesused"></a>Technologies Used

- **React.js**
- **React Router DOM**
- **TheMealDB API**
- **CSS3**

## <a name="features"></a> Features

- **UI / UX**
  - Clean, responsive Grid layout for recipe cards.
  - Navbar with global navigation and integrated search bar.
  - Loading spinners and error messages for smooth user feedback.
- **Data & State Management**

  - **Custom Hooks:**
    - `useFetch`: Handles asynchronous API calls, loading states, and error handling.
    - `useLocalStorage`: Synchronizes the "Favorites" list with the browser's local storage.
  - **Context API:**
    - `FavoritesContext`: Provides global access to add, remove, and check favorite status of recipes across all components.

- **Routing & Navigation**
  - **Home Page:** Displays all recipe categories.
  - **Category Page:** Dynamic route (`/category/:name`) showing filtered results.
  - **Recipe Detail:** Dynamic route (`/recipe/:id`) displaying full ingredients, instructions, and images.
  - **Search:** functional search bar that redirects to results via URL query parameters.

## <a name="nextsteps"></a>Future Features

- Add a "Shopping List" feature generated from recipe ingredients.
- Implement pagination for large search results.
- Add a filter for "Area" (e.g., Italian, Japanese, Mexican).
- Add a "Surprise Me" button to fetch a random meal.

## <a name="deployment"></a>Deployed Link

[GitHub Pages / Vercel Link Here](https://your-username.github.io/DiscoverEAT/)

- You can view the repository here:
  [GitHub Repo](https://github.com/cgxgb123/DiscoverEAT)
- **Installation Instructions:**
  1. Clone the repo: `git clone https://github.com/cgxgb123/DiscoverEAT.git`
  2. Install dependencies: `npm install`
  3. Run locally: `npm start`

## <a name="reflection"></a>Reflection

**Challenges:**
One of the most challenging aspects of this project was synchronizing the "Favorite" button state on the Recipe Detail page. Ensuring that the button correctly reflected whether a specific item ID already existed in the Context array required careful use of the `.some()` array method within the context provider.

## <a name="author"></a>About The Author

- **[Christian Blunt](https://www.linkedin.com/in/christiangblunt/)** - Technical Analyst

## Works Cited:

- [TheMealDB API Documentation](https://www.themealdb.com/api.php)
- [React Documentation - Context API](https://react.dev/learn/passing-data-deeply-with-context)
- [React Router DOM Documentation](https://reactrouter.com/en/main)
- [MDN Web Docs - Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
