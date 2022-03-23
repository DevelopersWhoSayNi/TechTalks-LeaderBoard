import React, { Component } from "react";
import "./LeaderBoard.scss";
import Trophy from "../resources/trophy.png";
import { Image, Header, Icon } from "semantic-ui-react";
import GetLeaderboard from "../api/GetLeaderboard";
import Confetti from "react-confetti";

const RenderTopHackers = (hackersList) => {
  // returns a list of top three hackers
  return hackersList.slice(0, 3).map((hacker, i) => {
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

class Winners extends Component {
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
      <div>
        <Confetti />
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
            Top Hackers
          </Header>

          <ol>{RenderTopHackers(this.state.List)}</ol>
          <br />
          <br />
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default Winners;
