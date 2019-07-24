import React, { Component } from 'react';
import './lists-muen.scss';
import './lists.scss';
import banner1 from '../images/list/banner-list1.png';
import banner2 from '../images/list/banner-list2.png';
import banner3 from '../images/list/banner-list3.png';
import banner4 from '../images/list/banner-list4.png';
import download from '../images/list/download.png';
import { sendHTTP } from '../helpers/helper';

export default class Listsmuen extends Component {
  render() {
    return (
      <div className="lists-muen ">
        <div className="banner-muen">
          <img src={banner1} />
          <img src={banner2} />
          <img src={banner3} />
          <img src={banner4} />
        </div>
        <div className="download">
          <div className="download-img" />
          <div className="down-app">
            <h3>下载简书手机App ></h3>
            <br />
            <span>&nbsp;随时随地发现和创作内容</span>
          </div>
          <div className="hover">
            <img src={download} />
          </div>
        </div>
        <div>
          <Lists />
        </div>
      </div>
    );
  }
}

class Lists extends Component {
  constructor() {
    super();
    this.state = {
      lists: []
    };
  }
  componentDidMount() {
    sendHTTP({ url: 'users/recommended?seen_ids=&count=5&only_unfollowed=true' }, res => {
      this.setState({ lists: res.users });
    });
  }

  render() {
    var { lists } = this.state;
    return (
      <div className="lists">
        <div className="ad">
          <span className="ad-text">广告</span>
        </div>
        <div className="lists-item">
          <div className="lists-item-top">
            <span>推荐作者</span>
            <span className="get-change">换一换</span>
          </div>
          <div className="items-box-rt">
            {lists.length &&
              lists.map(item => (
                <div className="item-author" key={item.id}>
                  <img src={item.avatar_source} />
                  <div className="author-info">
                    <span className="author-name">zuozhe</span>
                    <span className="fr attention">＋关注</span>
                    <br />
                    <span className="statistics">
                      写了{item.total_wordage / 1000}K字<em>·</em>
                      {item.total_likes_count / 1000}K喜欢
                    </span>
                  </div>
                </div>
              ))}
          </div>
          <div className="list-bot">查看全部 ></div>
        </div>
      </div>
    );
  }
}
