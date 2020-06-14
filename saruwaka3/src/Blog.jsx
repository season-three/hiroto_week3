import React from "react";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "忍者" };
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
        <p className="word_test">イトーですよろしくお願いします</p>
      </div>
    );
  }
}

export default Blog;
