import React, { Component } from "react";
import "./LeaderBoard.scss";
import Trophy from "../resources/trophy.png";
import { Image, Header, Icon } from "semantic-ui-react";
import GetLeaderboard from "../api/GetLeaderboard";

const RenderHackers = (hackersList) => {
  return hackersList.map((hacker, i) => {
    return (
      <li key={i}>
        <mark>
          {hacker.Name}{" "}
          <div style={{ color: "floralwhite", fontSize: "x-small" }}>
            ( {hacker.UserID} )
          </div>
        </mark>
        <small>{hacker.Score}</small>
      </li>
    );
  });
};

class LeaderBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      List: [],
    };
  }

  componentDidMount() {
    this.getHackersList();
  }

  getHackersList() {
    this.setState({ List: [] });
    GetLeaderboard()
      .then((res) => {
        this.setState({ List: res });
      })
      .catch((error) => {
        console.log("Failed");
        console.log(error);
      });
  }

  render() {
    return (
      <div className="leaderboard" style={{ padding: "2%" }}>
        <div
          style={{
            float: "right",
            paddingTop: "30px",
            paddingRight: "40px",
            cursor: "pointer",
          }}
          onClick={(e) => this.getHackersList()}
        >
          <Icon name="refresh" color="blue" size="large" />
        </div>
        <Header color="yellow" style={{ paddingLeft: "8%" }}>
          <Image src={Trophy} style={{ width: "40px" }} />
          Hackers Leader Board
        </Header>

        <ol>{RenderHackers(this.state.List)}</ol>
      </div>
    );
  }
}

export default LeaderBoard;
