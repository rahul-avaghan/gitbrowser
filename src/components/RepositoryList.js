import React, { Component } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

import { getRepositories, getCommits } from "../actions/repostiory";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import "./repocontainer.css";
class RepositoryList extends Component {
  componentWillMount() {
    this.props.getRepositories(this.props.token);
  }

  liStyle = {
    cursor: "pointer"
  };
  cardStyle = {
    width: "320px",
    margin: "20px"
  };
  cardContainer = {
    display: "flex",
    flexDirection: "row",
    "justify-content": "center",
    flexWrap: "wrap"
  };
  detailview = {
    background: "red"
  };
  mainContainer = {
    display: "flex",
    flexDirection: "row"
  };

  render() {
    return (
      <div>
        <h2 class="repoHeader"> List of repositories </h2>
        <div style={this.mainContainer}>
          <div class="repocontainer" style={this.cardContainer}>
            {this.props.repos &&
              this.props.repos.length &&
              this.props.repos.map(t => {
                return (
                  <Card key={t.id} style={this.cardStyle}>
                    <CardBody>
                      <CardTitle className="text-primary">{t.name}</CardTitle>
                      <CardSubtitle>{t.language}</CardSubtitle>
                      <CardText className="text-muted">
                        {t.description}
                      </CardText>
                      <Button class="viewcommits">
                        <Link to={`/commits/${t.name}`}>View commits</Link>
                      </Button>
                    </CardBody>
                  </Card>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

RepositoryList.propTypes = {
  getRepositories: PropTypes.func.isRequired,
  repositories: PropTypes.array.isRequired,
  getCommits: PropTypes.func.isRequired,
  token:PropTypes.string
};

const mapStateToProps = state => ({
  repos: state.repos.repositories,
  commits: state.repos.commits,
  token:state.tokenreducer.token
});

export default connect(
  mapStateToProps,
  { getRepositories, getCommits }
)(RepositoryList);
