import React from "react";
import Center from "./Center";

class Clearfix extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="clearfix">
        <a href="" className="popular">
          <article className="post">
            <img className="speciala" src={this.props.image} />
            <div className="post_thumbnail">{this.props.name}</div>
          </article>
        </a>
      </div>
    );
  }
}

export default Clearfix;
