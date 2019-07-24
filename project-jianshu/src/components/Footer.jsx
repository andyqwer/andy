import React, { Component } from 'react';
import './footer.scss';
import smrz from '../images/icon/smrz.png';
import fanzha from '../images/icon/fanzha.jpg';
import wxb from '../images/icon/wxb.png';
import zggsrz from '../images/icon/zggsrz.png';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="fot-titelt">
          <a href="">关于简书</a>
          <em>·</em>
          <a href="">联系我们</a>
          <em>·</em>
          <a href="">加入我们</a>
          <em>·</em>
          <a href="">简书出版</a>
          <em>·</em>
          <a href="">品牌与徽标</a>
          <em>·</em>
          <a href="">帮助中心</a>
          <em>·</em>
          <a href="">合作伙伴</a>
        </div>
        <span>
          ©2012-2019 上海佰集信息科技有限公司 / 简书 / 沪ICP备11018329号-5 /
          <a href="">
            <img src={smrz} className="smrz" /> 沪公网安备31010402002252号
          </a>
          /
        </span>
        <br />
        <span>
          <img src={wxb} className="wxd" />
          简书网举报电话：021-34770013 / <img src={fanzha} className="fanzha" /> 亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产
        </span>
        <br />
        <span>
          被骗受损而设，请您一旦收到来电，立即接听 / <img src={zggsrz} className="zggsrz" />
        </span>
      </footer>
    );
  }
}
