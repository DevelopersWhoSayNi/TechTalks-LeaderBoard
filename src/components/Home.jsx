import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Segment,
  Grid,
  Icon,
  Search,
  Header,
  Divider,
  Button,
} from "semantic-ui-react";

class Home extends Component {
  render() {
    return (
      <div className="submitflag">
        <Segment placeholder>
          <Grid columns={2} stackable textAlign="center">
            <Divider vertical>Or</Divider>

            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Header icon>
                  <Icon name="send" />
                  <Link to="submitflag">submitflag</Link>
                </Header>
              </Grid.Column>

              <Grid.Column>
                <Header icon>
                  <Icon name="trophy" />
                  <Link to="Leaderboard">Leaderboard</Link>
                </Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default Home;
