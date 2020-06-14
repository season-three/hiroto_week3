import React from "react";
import Side from "./Side";
import Center from "./Center";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main">
        <Center />
        <Side />
      </div>
    );
  }
}

export default Main;
