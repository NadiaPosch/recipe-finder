import { Grid, Header } from 'semantic-ui-react'
import RecipeListItem from './RecipeListItem'

const RecipeList = ({ recipes, searchedQuery }) => {
  return (
    <div className="container">
      <Header content={`Recipe Lists for "${searchedQuery}"`} />
      <div class="grid">
        {recipes?.map((recipe) => (
          <Grid.Column
            style={{
              width: '300px',
            }}
            key={recipe.id} // Add a unique key when mapping elements
          >
            <RecipeListItem style={{ height: '450px' }} recipe={recipe} />
          </Grid.Column>
        ))}
      </div>
    </div>
  )
}

export default RecipeList
