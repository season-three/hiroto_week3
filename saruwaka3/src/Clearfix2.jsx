import React from "react";
import Center from "./Center";

class Clearfix2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="clearfix_2">
        <a href="" className="popular2">
          <article className="post">
            {/* <div className="speciala_box"> */}

            <div className="html-css">{this.props.skill}</div>
            <div className="technology">{this.props.techology}</div>
            <img className="speciala" src={this.props.image2} />

            {/* </div> */}
            <div className="post_thumbnail">{this.props.name2}</div>
            <div className="days">{this.props.days}</div>
          </article>
        </a>
      </div>
    );
  }
}

export default Clearfix2;
