import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

class Top extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="top">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default Top;
