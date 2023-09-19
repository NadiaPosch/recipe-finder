import { Link } from "react-router-dom";
import { Button, Card, Popup } from "semantic-ui-react";

export const RecipeListItem = (props) => {
  return (
    <Card>
      <img
        src={props.recipe.image_url}
        alt="thumbnail"
        style={{ height: 180 }}
      />
      <Card.Content>
        <Popup
          trigger={
            <div
              className="recipe-title"
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {props.recipe.title}
            </div>
          }
          content={props.recipe.title}
          position="top center"
          inverted
        />
        <Card.Description>
          <h4>{props.recipe.publisher}</h4>
        </Card.Description>
      </Card.Content>
      <Card.Content>
        <Button
          as={Link}
          to={`/recipes/${props.recipe.recipe_id}`}
          content="Details"
          color="blue"
          size="tiny"
        />
        <Button
          href={props.recipe.source_url}
          target="_blank"
          content="Recipe URL"
          color="green"
          size="tiny"
        />
      </Card.Content>
    </Card>
  );
};
