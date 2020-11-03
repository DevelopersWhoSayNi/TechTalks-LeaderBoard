import React, { Component } from "react";
import "./LeaderBoard.scss";
import Trophy from "../resources/trophy.png";
import { Image, Header, Icon } from "semantic-ui-react";

const list = [
  { name: "Zeus", score: "10000" },
  { name: "Poseidon", score: "9000" },
  { name: "Dionysus", score: "8600" },
  { name: "Athena", score: "8000" },
  { name: "Hephaestus", score: "7700" },
  { name: "Zeus", score: "10000" },
  { name: "Poseidon", score: "9000" },
  { name: "Dionysus", score: "8600" },
  { name: "Athena", score: "8000" },
  { name: "Hephaestus", score: "7700" },
  { name: "Poseidon", score: "9000" },
  { name: "Dionysus", score: "8600" },
  { name: "Athena", score: "8000" },
  { name: "Hephaestus", score: "7700" },
  { name: "Zeus", score: "10000" },
  { name: "Poseidon", score: "9000" },
  { name: "Dionysus", score: "8600" },
  { name: "Athena", score: "8000" },
  { name: "Hephaestus", score: "7700" },
  { name: "Poseidon", score: "9000" },
  { name: "Dionysus", score: "8600" },
  { name: "Athena", score: "8000" },
  { name: "Hephaestus", score: "7700" },
  { name: "Zeus", score: "10000" },
  { name: "Poseidon", score: "9000" },
  { name: "Dionysus", score: "8600" },
  { name: "Athena", score: "8000" },
  { name: "Hephaestus", score: "7700" },
  { name: "Poseidon", score: "9000" },
  { name: "Dionysus", score: "8600" },
  { name: "Athena", score: "8000" },
  { name: "Hephaestus", score: "7700" },
  { name: "Zeus", score: "10000" },
  { name: "Poseidon", score: "9000" },
  { name: "Dionysus", score: "8600" },
  { name: "Athena", score: "8000" },
  { name: "Hephaestus", score: "7700" },
  { name: "Poseidon", score: "9000" },
  { name: "Dionysus", score: "8600" },
  { name: "Athena", score: "8000" },
  { name: "Hephaestus", score: "7700" },
  { name: "Zeus", score: "10000" },
  { name: "Poseidon", score: "9000" },
  { name: "Dionysus", score: "8600" },
  { name: "Athena", score: "8000" },
  { name: "Hephaestus", score: "7700" },
  { name: "Poseidon", score: "9000" },
  { name: "Dionysus", score: "8600" },
  { name: "Athena", score: "8000" },
  { name: "Hephaestus", score: "7700" },
  { name: "Zeus", score: "10000" },
  { name: "Poseidon", score: "9000" },
  { name: "Dionysus", score: "8600" },
  { name: "Athena", score: "8000" },
  { name: "Hephaestus", score: "7700" },
  { name: "Poseidon", score: "9000" },
  { name: "Dionysus", score: "8600" },
  { name: "Athena", score: "8000" },
  { name: "Hephaestus", score: "7700" },
  { name: "Zeus", score: "10000" },
  { name: "Poseidon", score: "9000" },
  { name: "Dionysus", score: "8600" },
  { name: "Athena", score: "8000" },
  { name: "Hephaestus", score: "7700" },
  { name: "Poseidon", score: "9000" },
  { name: "Dionysus", score: "8600" },
  { name: "Athena", score: "8000" },
  { name: "Hephaestus", score: "7700" },
  { name: "Zeus", score: "10000" },
  { name: "Poseidon", score: "9000" },
  { name: "Dionysus", score: "8600" },
  { name: "Athena", score: "8000" },
  { name: "Hephaestus", score: "7700" },
  { name: "Poseidon", score: "9000" },
  { name: "Dionysus", score: "8600" },
  { name: "Athena", score: "8000" },
  { name: "Hephaestus", score: "7700" },
  { name: "Zeus", score: "10000" },
  { name: "Poseidon", score: "9000" },
  { name: "Dionysus", score: "8600" },
  { name: "Athena", score: "8000" },
  { name: "Hephaestus", score: "7700" },
];

const RenderHackers = (hackersList) => {
  return hackersList.map((hacker, i) => {
    return (
      <li key={i}>
        <mark>{hacker.name}</mark>
        <small>{hacker.score}</small>
      </li>
    );
  });
};

class LeaderBoard extends Component {
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
          onClick={(e) => console.log("this")}
        >
          <Icon name="refresh" color="blue" size="large" />
        </div>
        <Header color="yellow" style={{ paddingLeft: "8%" }}>
          <Image src={Trophy} style={{ width: "40px" }} />
          Hackers Leader Board
        </Header>

        <ol>{RenderHackers(list)}</ol>
      </div>
    );
  }
}

export default LeaderBoard;
