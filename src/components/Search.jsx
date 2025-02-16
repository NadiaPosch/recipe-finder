import { useState } from "react";
import { Grid, Form, Input } from "semantic-ui-react";

export const Search = (props) => {
  const [value, setValue] = useState("");

  const onFormSubmit = () => {
    props.setSearchedQuery(value);
    setValue("");
  };

  return (
    <Grid column={2} textAlign="center" className="search-box">
      <Grid.Column>
        <h2 className="search-heading">
          Lets explore the {""}
          <span style={{ color: "#2185D0", fontStyle: "italic" }}>recipes</span>
        </h2>

        <Form onSubmit={onFormSubmit}>
          <Input
            placeholder="tomato,potato,pizza"
            action={{ icon: "search", color: "blue" }}
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </Form>
      </Grid.Column>
    </Grid>
  );
};
