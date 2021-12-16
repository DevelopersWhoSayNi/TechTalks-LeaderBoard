import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon, Menu } from "semantic-ui-react";

class SideMenuBar extends Component {
  render() {
    const activeItem = this.props.activeItem;
    return (
      <Menu className="sideMenuBar" compact icon="labeled" vertical>
        <Menu.Item name="Home" active={activeItem === "Home"}>
          <Icon name="home" />
          <Link to="">Home</Link>
        </Menu.Item>

        <Menu.Item name="leaderboard" active={activeItem === "leaderboard"}>
          <Icon name="trophy" />
          <Link to="Leaderboard">Leaderboard</Link>
        </Menu.Item>

        <Menu.Item name="submitflag" active={activeItem === "submitflag"}>
          <Icon name="send" />
          <Link to="submitflag">Submit Flag</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default SideMenuBar;
