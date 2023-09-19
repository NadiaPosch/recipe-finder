import { useEffect, useState } from "react";
import RecipeList from "../components/RecipeList";
import Search from "../components/Search";
import { getRecipes } from "../services/api";

const Recipes = () => {
  const [searchedQuery, setSearchedQuery] = useState("pizza");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getSearchedResult = async () => {
      let result = await getRecipes(searchedQuery);
      if (result?.recipes) {
        setRecipes(result.recipes);
      }
    };
    getSearchedResult();
  }, [searchedQuery]);

  return (
    <>
      <Search setSearchedQuery={setSearchedQuery} />
      <RecipeList recipes={recipes} searchedQuery={searchedQuery} />
    </>
  );
};

export default Recipes;
