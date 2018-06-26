import React, { Component } from "react";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Button,
  Alert,
  Container,
  Row,
  Col
} from "reactstrap";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Searchheader } from "./SearchHeader";
import {
  getCommits,
  refreshCommits,
  searchCommits
} from "./../actions/repostiory";

import { DATE_OPTIONS } from "../constants";

import "./repocontainer.css";

class Commits extends Component {
  constructor() {
    super();
    this.input = React.createRef();
    this.getMoreItems = this.getMoreItems.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if (
      this.props.match &&
      this.props.match.params &&
      this.props.location.pathname.indexOf(this.props.match.params.repoName) > 0
    ) {
      this.currentPage = 1;
      this.props.refreshCommits();
      this.props.getCommits(this.props.token,this.props.match.params.repoName);
    }
  }

  getCommitRow = k => {
    return (
      <ListGroupItem key={k.sha}>
        <div>
          <a href={k.author ? k.author.html_url : "#"}>
            <img alt={k.commit.author.name} class="avatar" src={k.author ? k.author.avatar_url : ""} />
          </a>
        </div>
        <ListGroupItemHeading>{k.commit.message}</ListGroupItemHeading>
        <ListGroupItemText>
          Committed on :{" "}
          {new Date(k.commit.author.date).toLocaleDateString(
            "en-US",
            DATE_OPTIONS
          )}
        </ListGroupItemText>
      </ListGroupItem>
    );
  };

  getMoreItems(e) {
    this.currentPage++;
    e.preventDefault();
    this.input.current.value === ""
      ? this.props.getCommits(
          this.props.match.params.repoName,
          this.currentPage
        )
      : this.props.searchCommits(
          "facebook",
          this.props.match.params.repoName,
          this.input.current.value,
          this.currentPage
        );
  }

  /**
   *
   */
  handleChange = e => {
    if (e.key === "Enter" && this.input.current.value) {
      this.props.refreshCommits();
      this.currentPage = 1;
      this.props.searchCommits(
        "facebook",
        this.props.match.params.repoName,
        this.input.current.value
      );
    }
  };

  render() {
    return (
      <div>
        {this.props.commitsAvaiable}
        <Container>
          <Row>
            <Col sm={{ size: 10, order: 2, offset: 1 }}>
              <Searchheader repoName={this.props.match.params.repoName} />
            </Col>
          </Row>
          <Row>
            <Col sm={{ size: 10, order: 2, offset: 1 }}>
              <input
                type="search"
                onKeyPress={this.handleChange}
                ref={this.input}
                name="search"
                id="search"
                placeholder="Search for commits by commit message..."
                class="form-control"
              />
            </Col>
          </Row>
          <Row>
            <Col sm={{ size: 10, order: 2, offset: 1 }}>
              <div>
                <ListGroup hidden={this.props.commits.length === 0}>
                  {this.props.commits &&
                    this.props.commits.length &&
                    this.props.commits.map(k => {
                      return this.getCommitRow(k);
                    })}
                  <Button
                    hidden={this.props.commitsAvaiable === false}
                    onClick={this.getMoreItems}
                    class="viewcommits"
                    color="info"
                  >
                    Show more commits
                  </Button>
                </ListGroup>
                <Alert hidden={this.props.commits.length !== 0} color="warning">
                  No commits found!
                </Alert>
                <Alert hidden={this.props.commitsAvaiable === true} color="danger">
                  Thats all ..!
                </Alert>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
const mapCommitStateToProps = state => ({
  commits: state.repos.commits,
  commitsAvaiable:state.repos.commitsAvaiable,
  token:state.tokenreducer.token
});

Commits.propTypes = {
  getCommits: PropTypes.func.isRequired,
  refreshCommits: PropTypes.func.isRequired,
  searchInput: PropTypes.string,
  commitsAvaiable:PropTypes.bool.isRequired,
  token:PropTypes.string
};
export default connect(
  mapCommitStateToProps,
  {
    getCommits,
    refreshCommits,
    searchCommits
  }
)(Commits);
