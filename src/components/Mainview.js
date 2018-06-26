import React, { Component } from "react";
import Header from "./Header";
import RepositoryList from "./RepositoryList";
import Commits from "../components/Commits";
import { Route, BrowserRouter } from "react-router-dom";
export class Mainview extends Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <div>
            <Route exact path="/gitbrowser" component={RepositoryList} />
            <Route path="/repositories" component={RepositoryList} />
            <Route path="/commits/:repoName" component={Commits} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
