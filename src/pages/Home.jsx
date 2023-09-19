import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import { Header } from '../components/Header'

const Home = () => {
  return (
    <Header title="Find your Recipes" bgClass="bg-image">
      <Button
        content="SEARCH RECIPES"
        color="primary"
        as={Link}
        to="/recipes"
        size="big"
      />
    </Header>
  )
}

export default Home
