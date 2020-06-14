import React from "react";
import Category from "./Category";
import Main from "./Main";

class Side extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const categoryList = [
      {
        name: "HTML&CSS",
        catItem: "Webデザイン入門",
        catItem2: "WordPressの使い方",
        catItem3: "マテリアルデザイン入門",
        catItem4: "リファレンス",
      },
      {
        name: "in English",
      },
      {
        name: "サルワカ道具箱",
      },
      {
        name: "テクノロジー",
        catItem: "アプリ",
        catItem2: "インターネット",
        catItem3: "メディア・CEO",
      },
      {
        name: "デザイン",
        catItem: "Canvaの使い方",
        catItem2: "Photoshopnの使い方",
        catItem3: "デザインのコツと素材",
        catItem4: "デザイン参考",
      },
      {
        name: "メモ",
      },
      {
        name: "学び",
      },
      {
        name: "暮らしの知恵",
        catItem: "Amozonの使い方",
        catItem2: "力尽きたときの簡単レシピ",
      },
    ];
    return (
      <div className="side">
        <div className="category">
          <h4 className="side_titile">カテゴリー</h4>

          <div className="category_ul">
            {categoryList.map((categoryItem) => {
              return (
                <Category
                  name={categoryItem.name}
                  catItem={categoryItem.catItem}
                  catItem2={categoryItem.catItem2}
                  catItem3={categoryItem.catItem3}
                  catItem4={categoryItem.catItem4}
                />
              );
            })}
          </div>
        </div>
        <div className="category_2">
          <div className="side_saruwaka">
            <div className="saruwaka_box">
              <h1 className="profile">サルワカについて</h1>
              <img src="" alt="" className="saruwaka_image" />
              <h2 className="saruwaka_name">サルワカくんについて</h2>
              <h4 className="sentences">
                知っておきたい「暮らしの雑学」や「インターネットの知識」を分かりやすく解説していきます。
              </h4>
              <div className="link_menu">
                <a href="https://twitter.com/saruwakakun" className="tw">
                  <div className="tnsml">@saruwakakun</div>
                </a>
                <a
                  href="https://feedly.com/i/subscription/feed/http://saruwakakun.com/feed"
                  className="fd"
                >
                  <div className="tnsml">Feedly</div>
                </a>
              </div>
            </div>
          </div>
          <div className="search">
            <div className="search_box">
              <h1 className="search">検索</h1>
              <div className="submit"></div>
            </div>
          </div>
          <div className="sponsor"></div>
        </div>
      </div>
    );
  }
}

export default Side;
