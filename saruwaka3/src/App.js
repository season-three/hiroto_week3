import React from "react";
import "./App.css";
import "./index.css";
import "./index.css";
import Top from "./Top";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Language from "./Language";

import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { render } from "@testing-library/react";

class App extends React.Component {
  render() {
    return (
      <div>
        <Top />
      </div>
    );
  }
}

export default App;
