import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
/**search header */
export class Searchheader extends Component {
  

  render() {
    return (
      <div class=" searchheader flex-spacebetween flex automargin">
        <div>
          <Button>
            <Link to="/repositories">View repositories </Link>
          </Button>
        </div>
        <div>
          <h2 class="h3">List of commits for {this.props.repoName} </h2>
        </div>
        <div>
          <Button
            onClick={() => {
              window.location.reload();
            }}
          >
            Reset search
          </Button>
        </div>
      </div>
    );
  }
}
