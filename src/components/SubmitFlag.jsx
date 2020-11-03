import React, { Component } from "react";
import {
  Button,
  Input,
  Segment,
  Label,
  Icon,
  Message,
} from "semantic-ui-react";

class SubmitFlag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: null,
      exactId: null,
      flag: null,
      displayNameError: false,
      exactIdError: false,
      flagError: false,
    };
  }

  onChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
      displayNameError: false,
      exactIdError: false,
      flagError: false,
    });

  submitFlag() {
    if (!this.state.displayName) {
      this.setState({ displayNameError: true });
    }
    if (!this.state.exactId) {
      this.setState({ exactIdError: true });
    }
    if (!this.state.flag) {
      this.setState({ flagError: true });
    }

    if (this.state.displayName && this.state.displayName && this.state.flag) {
      console.log(this.state.displayName);
      console.log(this.state.exactId);
      console.log(this.state.flag);
      this.setState({ flag: null });
    }
  }

  render() {
    return (
      <div>
        <Message icon>
          <Icon name="check circle outline" color="green" />
          <Message.Content>
            <Message.Header>Correct!</Message.Header>
            You have been awarded 500 points!
          </Message.Content>
        </Message>
        <div className="submitflag">
          <h1 style={{ paddingLeft: "5%", paddingTop: "2%" }}>
            Submit your flag
          </h1>

          <div style={{ padding: "5%", paddingTop: "1%", paddingBottom: "7%" }}>
            <Segment style={{ background: "inherit" }}>
              {this.state.displayNameError ? (
                <Label basic color="red">
                  Field is mandatory
                </Label>
              ) : null}
              <Input
                fluid
                name="displayName"
                onChange={(e) => this.onChange(e)}
                placeholder="Display Name"
              />
            </Segment>
            <Segment style={{ background: "inherit" }}>
              {this.state.exactIdError ? (
                <Label basic color="red">
                  Field is mandatory
                </Label>
              ) : null}
              <Input
                name="exactId"
                onChange={(e) => this.onChange(e)}
                style={{ display: "flex" }}
                label={{ basic: true, content: "@exactsoftware.com" }}
                labelPosition="right"
                placeholder="Enter your exact ID"
              />
            </Segment>
            <Segment style={{ background: "inherit" }}>
              {this.state.flagError ? (
                <Label basic color="red">
                  Field is mandatory
                </Label>
              ) : null}
              <Input
                style={{ height: "60px" }}
                fluid
                name="flag"
                onChange={(e) => this.onChange(e)}
                placeholder="Flag"
                value={this.state.flag}
              />
            </Segment>
            <Button
              style={{ marginRight: "16px", marginBottom: "20px" }}
              floated="right"
              positive
              onClick={(e) => this.submitFlag()}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default SubmitFlag;
