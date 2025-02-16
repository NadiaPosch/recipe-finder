import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Grid, Header, Image, Segment } from "semantic-ui-react";
import { getRecipe } from "../services/api";

export const RecipeDetails = () => {
  const [recipe, setRecipe] = useState({});

  const { recipeId } = useParams();

  useEffect(() => {
    const getData = async () => {
      let result = await getRecipe(recipeId);

      if (result?.recipe) {
        setRecipe(result.recipe);
      }
    };

    getData();
  }, [recipeId]);

  if (Object.keys(recipe).length === 0) {
    return null;
  }

  return (
    <Grid container stackable columns={2} className="details-page-content">
      <Grid.Column>
        <Button
          as={Link}
          to="/recipes"
          content="Back to recipe List"
          color="yellow"
          style={{ marginBottom: 40 }}
        />
        <Image src={recipe.image_url} />
      </Grid.Column>
      <Grid.Column>
        <Header size="medium">{recipe.title}</Header>
        <p>Provided By: {recipe.publisher}</p>
        <Button
          as="a"
          href={recipe.publisher_url}
          target="_blank"
          content="Publisher Webpage"
          color="blue"
        />
        <Button
          as="a"
          href={recipe.source_url}
          target="_blank"
          content="Recipe URL"
          color="green"
        />
        <Header size="large" content="Ingredients" />
        <Segment.Group>
          {recipe?.ingredients.map((data) => (
            <Segment key={data}>
              <h5>{data}</h5>
            </Segment>
          ))}
        </Segment.Group>
      </Grid.Column>
    </Grid>
  );
};
