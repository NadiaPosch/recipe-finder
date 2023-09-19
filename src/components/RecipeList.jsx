import { Grid, Header } from "semantic-ui-react";
import { RecipeListItem } from "./RecipeListItem";

export const RecipeList = (props) => {
  return (
    <div className="container">
      <Header content={`Recipe Lists for "${props.searchedQuery}"`} />
      <div class="grid">
        {props.recipes?.map((recipe) => (
          <Grid.Column
            style={{
              width: "300px",
            }}
            key={recipe.id} // Add a unique key when mapping elements
          >
            <RecipeListItem style={{ height: "450px" }} recipe={recipe} />
          </Grid.Column>
        ))}
      </div>
    </div>
  );
};
