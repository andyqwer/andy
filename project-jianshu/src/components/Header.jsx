import React, { Component } from 'react';
import './header.scss';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-box">
          <div className="logo " />
          <div className="logo-lt ">
            <div className="top-home item-top">
              <i className="top-icon">&nbsp;</i>
              首页
            </div>
            <div className="app-down item-top">
              <i className="top-icon">&nbsp;</i>
              下载App
            </div>
            <div className="sw item-top" ref="input" onFocus={() => console.log(this.refs.input)}>
              <input type="text" name="" id="" placeholder="搜索" />
              <span className="btn-sw" />
            </div>
          </div>
          <div className="logo-rt">
            <span className="icon-Aa item" />
            <span className="icon-bete item" />
            <span className=" item">登陆</span>
            <span className=" registered item">注册</span>
            <span className=" item write-an-essay">写文章</span>
          </div>
        </div>
      </div>
    );
  }
}
