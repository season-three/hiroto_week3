import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer">
        <div className="toppage">
          <h2 className="toppage_sentences">トップページへ</h2>
        </div>
        <div className="footer_bottom">
          <div className="footer_bottom2">
            <h2 className="service">利用規約</h2>
            <h3 className="copyright">
              © Copyright 2020 サルワカ All rights reserved.
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
