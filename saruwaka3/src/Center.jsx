import React from "react";
import Main from "./Main";
import Clearfix from "./Clearfix";
import Clearfix2 from "./Clearfix2";

class Center extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const clearfixList = [
      {
        image:
          "https://saruwakakun.com/wp-content/uploads/2017/home/basic-min.png",
        name: "HTML/CSS入門〜ゼロからのWEB制作",
      },
      {
        image:
          "https://saruwakakun.com/wp-content/uploads/2017/05/daga-03-min-520x300.png",
        name: "サルワカの殿堂入り記事集",
      },
      {
        image:
          "https://saruwakakun.com/wp-content/uploads/2020/04/thumbnail-small-min.png",
        name: "サルワカ道具箱〜Webですぐに使えるツール集",
      },
      {
        image:
          "https://saruwakakun.com/wp-content/uploads/2017/05/daga-min.png",
        name: "力尽きた時のための簡単レシピ",
      },
      {
        image:
          "https://saruwakakun.com/wp-content/uploads/2017/09/light-mockup-2-min-520x300.jpg",
        name: "WordPressテーマ「SANGO」の使い方",
      },
      {
        image:
          "https://saruwakakun.com/wp-content/uploads/2017/04/eyecatch-01-1.png",
        name: "1番やさしいマテリアルデザイン入門",
      },
      {
        image:
          "https://saruwakakun.com/wp-content/uploads/2017/06/bookstoread-01-min-1-520x300.png",
        name: "サルワカの中の人が選ぶおすすめ本100",
      },
      {
        image:
          "https://saruwakakun.com/wp-content/uploads/2017/home/tips-min.png",
        name: "初心者向け「デザイン」の基本とコツ",
      },
      {
        image:
          "https://saruwakakun.com/wp-content/uploads/2017/05/fds-01-min.png",
        name: "本当に面白いおすすめ漫画55",
      },
      {
        image:
          "https://saruwakakun.com/wp-content/uploads/2017/11/fafdadfa.jpg",
        name: "本当に面白いおすすめ映画56",
      },
    ];

    const clearfixList_2 = [
      {
        skill: "HTML&CSS",
        image2:
          "https://saruwakakun.com/wp-content/uploads/2019/04/hero-01-min-520x300.png",
        name2: "ConoHa WINGでWordPressサイトを作る全手順（初心者向け）",
        days: "2020/4/19",
      },
      {
        techology: "テクノロジー",
        image2:
          "https://saruwakakun.com/wp-content/uploads/2017/home/tips-min.png",
        name2: "デザイナーがプログラミングを学んでみた",
        days: "2020/4/19",
      },
      {
        skill: "HTML&CSS",
        image2:
          "https://saruwakakun.com/wp-content/uploads/2019/02/fdadfa-01-min-520x300.png",
        name2: "WordPressでサイト内の全コメントを一覧表示する方法",
        days: "2020/4/19",
      },
      {
        skill: "HTML&CSS",
        image2:
          "https://saruwakakun.com/wp-content/uploads/2017/10/fasdfa-13-min-520x300.png",
        name2: "head内に書くべきタグを総まとめ：SEO対策に有効なものは？",
        days: "2020/4/19",
      },
      {
        skill: "HTML&CSS",
        image2:
          "https://saruwakakun.com/wp-content/uploads/2017/12/dfadfa-520x300.png",
        name2:
          "便利なWordPressの条件分岐16パターン：カスタマイズで活躍するものを厳選！",
        days: "2020/4/19",
      },
      {
        techology: "テクノロジー",
        image2:
          "https://saruwakakun.com/wp-content/uploads/2017/11/dfa-520x300.jpg",
        name2: "おすすめiPadアプリ53選：無料＆人気のものをまとめて紹介",
        days: "2020/4/19",
      },
      {
        skill: "HTML&CSS",
        image2:
          "https://saruwakakun.com/wp-content/uploads/2017/11/7fadfa-min-520x300.png",
        name2: "WordPress初心者が知っておきたい22のポイント",
        days: "2020/4/19",
      },
      {
        image2:
          "https://saruwakakun.com/wp-content/uploads/2017/home/tips-min.png",
        name2: "デザイナーがプログラミングを学んでみた",
        days: "2020/4/19",
        techology: "テクノロジー",
      },
      {
        skill: "HTML&CSS",
        image2:
          "https://saruwakakun.com/wp-content/uploads/2017/11/dfafda-520x300.png",
        name2:
          "【WordPress】子テーマからサムネイル画像サイズをオーバーライドする",
        days: "2020/4/19",
      },
      {
        skill: "HTML&CSS",
        image2:
          "https://saruwakakun.com/wp-content/uploads/2017/11/fasdfa-520x300.png",
        name2: "HTMLで改行する方法：brとpタグの使い分け方は？",
        days: "2020/4/19",
      },
      {
        skill: "HTML&CSS",
        image2:
          "https://saruwakakun.com/wp-content/uploads/2017/11/61-520x300.png",
        name2: "iPadがサブディスプレイに！アプリ「Duet Display」の使い方",
        days: "2020/4/19",
      },
      {
        skill: "HTML&CSS",
        image2:
          "https://saruwakakun.com/wp-content/uploads/2017/10/fasdfa-11-min-520x300.png",
        name2: "HTMLのlinkタグとは？基本的な書き方とrel属性まとめ",
        days: "2020/4/19",
      },
      {
        skill: "HTML&CSS",
        image2:
          "https://saruwakakun.com/wp-content/uploads/2017/10/metatag-05-04-520x300.png",
        name2: "メタタグとは？SEO効果は？metaタグ一覧と書き方まとめ",
        days: "2020/4/19",
      },
      {
        skill: "HTML&CSS",
        image2:
          "https://saruwakakun.com/wp-content/uploads/2017/10/metatag-05-05-520x300.png",
        name2: "【WordPress】OGPとTwitterカードをプラグイン無しで設定する方法",
        days: "2020/4/19",
      },
      {
        skill: "HTML&CSS",
        image2:
          "https://saruwakakun.com/wp-content/uploads/2017/10/fadfaggg-01-min-520x300.png",
        name2: "WordPressユーザーにおすすめしたい7冊の本（初心者〜上級者向け）",
        days: "2020/4/19",
      },
      {
        skill: "HTML&CSS",
        image2:
          "https://saruwakakun.com/wp-content/uploads/2017/10/budfa-01-min-520x300.png",
        name2: "WordPressでバックアップを取る4つの方法（初心者向け）",
        days: "2020/4/19",
      },
      {
        skill: "HTML&CSS",
        image2:
          "https://saruwakakun.com/wp-content/uploads/2017/10/fadfagg-06-min-520x300.png",
        name2: "CSSだけで簡単！ハンバーガーメニューの作り方（スマホ対応）",
        days: "2020/4/19",
      },
      {
        skill: "HTML&CSS",
        image2:
          "https://saruwakakun.com/wp-content/uploads/2017/10/hamburger-01-min-520x300.png",
        name2: "FileZillaの使い方】WordPressでFTPソフトを使おう",
        days: "2020/4/19",
      },
    ];
    return (
      <div className="main_inner_pc main-inner">
        <div className="catmenu">
          <ul>
            <li className="menu_li li_1">デザイン・ウェブ制作</li>
            <li className="menu_li li_2">
              <a href="https://saruwakakun.com/life">暮らし</a>
            </li>
            <li className="menu_li li_3">
              <a href="https://saruwakakun.com/learn">学び</a>
            </li>
          </ul>
        </div>
        <div className="center">
          <div className="new_entry">
            <span>
              <div className="fa">人気記事</div>
            </span>
          </div>
          <div className="clearfix">
            {clearfixList.map((clearfixItem) => {
              return (
                <Clearfix image={clearfixItem.image} name={clearfixItem.name} />
              );
            })}
          </div>

          <div className="new_entry">
            <span>
              <div className="fa">人気記事</div>
            </span>
          </div>
          <div className="clearfix_2">
            {clearfixList_2.map((clearfixItem2) => {
              return (
                <Clearfix2
                  image2={clearfixItem2.image2}
                  name2={clearfixItem2.name2}
                  skill={clearfixItem2.skill}
                  techology={clearfixItem2.techology}
                  days={clearfixItem2.days}
                />
              );
            })}
          </div>
          <div className="pagination">
            <span className="current">1</span>
            <a href="https://saruwakakun.com/page/2" className="inactive">
              2
            </a>
            <a href="https://saruwakakun.com/page/3" className="inactive">
              3
            </a>
            <a href="https://saruwakakun.com/page/4" className="inactive">
              4
            </a>
            <a href="https://saruwakakun.com/page/5" className="inactive">
              5
            </a>
            <a href="https://saruwakakun.com/page/2">
              <i className="fa fa-angle-right"></i>
            </a>
            <a href="https://saruwakakun.com/page/14">
              <i className="fa fa-angle-double-right"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Center;
