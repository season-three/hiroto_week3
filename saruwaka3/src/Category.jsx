import React from "react";
import Side from "./Side";

class Category extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        <li className="category_menu">
          {this.props.name}
          <ul className="children">
            <li className="catitem">{this.props.catItem}</li>
            <li className="catitem2">{this.props.catItem2}</li>
            <li className="catitem3">{this.props.catItem3}</li>
            <li className="catitem4">{this.props.catItem4}</li>
          </ul>
        </li>
      </ul>
    );
  }
}

export default Category;
