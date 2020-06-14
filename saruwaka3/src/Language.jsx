import React from "react";

class Language extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "織田信長" };
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1 className="hello">こんにちは、{this.state.name}さん</h1>
        <button
          onClick={() => {
            console.log("羊");
          }}
        >
          羊だよ！
        </button>
        <p className="word_test">イトーです</p>
      </div>
    );
  }
}

export default Language;
