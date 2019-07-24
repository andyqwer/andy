import React, { Component } from 'react';
import './concat.scss';
import diamond from '../images/icon/diamond.png';
import like from '../images/icon/like.png';
import pinglun from '../images/icon/pinglun.png';

export default class Concat extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="items-box">
        {data.map((item, index) => (
          <div className="item" key={index}>
            {item.switch && (
              <div className="lt-img fr" style={{ display: 'block' }}>
                <img src={item.image} />
              </div>
            )}
            <div>
              <h3 className="title">{item.title}</h3>
              <p className="Introduction">{item.Introduction}</p>
              <div className="item-bot">
                <span className="like">
                  <img src={diamond} />
                  {item.like}
                </span>
                <span className="userName">{item.urerName}</span>
                <span className="comment">
                  <img src={pinglun} />
                  {item.comment}
                </span>
                <span className="collect">
                  <img src={like} />
                  {item.collect}
                </span>
              </div>
            </div>
          </div>
        ))}
        <button className="load-more">阅读更多</button>
      </div>
    );
  }
}
const data = [
  {
    title: '女人体重超过100斤，多吃这菜洗肠，变成小蛮腰，皮肤嫩似少女',
    uri: '/',
    Introduction:
      'Introduction最近天天加班，导致睡得晚，吃得多，上班一点精神都没有，周六的时候，和闺蜜约逛街，自从看见我后，就一直在数落我，说我皮肤暗黄，身材也臃肿了许多，还...',
    image: '',
    switch: false,
    like: '9.2',
    urerName: '卖灯的美食人',
    comment: '4',
    commenUri: '',
    collect: '47'
  },
  {
    title: '亲爱的，我在前世约了你',
    uri: '/',
    Introduction:
      '踏进三月的雨巷 留下足长的跫音 在转角恰逢的那一刻 你是一位温润儒雅的翩翩公子 我是一位眉目如画的窈窕淑女 隔着朦胧的雨雾 匆匆的惊鸿一瞥 转身......',
    image: '//upload-images.jianshu.io/upload_images/7722639-be14d502fd8d5398.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    switch: true,
    like: '9.2',
    urerName: '卖灯的美食人',
    comment: '4',
    commenUri: '',
    collect: '47'
  },
  {
    title: '十二星座谁最有钱！',
    uri: '/',
    Introduction:
      '白羊座 ★★ 因为天生好动，又喜欢闯荡江湖，白羊女生没什么富贵命，他们比较喜欢当女强人和男人一较高下。 金牛座 ★★★★★★ 嫁鸡随鸡，虽然有金...',
    image: '//upload-images.jianshu.io/upload_images/6463479-22b17bacd26538d0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    switch: false,
    like: '9.2',
    urerName: '卖灯的美食人',
    comment: '4',
    commenUri: '',
    collect: '47'
  },
  {
    title: '早春时尚看姚晨，蓝色蝴蝶结衬衫配短裙，倍儿潮还倍儿醒脑！',
    uri: '/',
    Introduction:
      '大家都知道姚晨是一名演员，殊不知她还学习过舞蹈呢，姚晨的性格很好，给人一种大大咧咧，诙谐爱笑的印象，就像她在《武林外传》中饰演的郭芙蓉一角，说到...',
    image: '//upload-images.jianshu.io/upload_images/7722639-be14d502fd8d5398.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    switch: true,
    like: '9.2',
    urerName: '卖灯的美食人',
    comment: '4',
    commenUri: '',
    collect: '47'
  },
  {
    title: '早春时尚看姚晨，蓝色蝴蝶结衬衫配短裙，倍儿潮还倍儿醒脑！',
    uri: '/',
    Introduction:
      '大家都知道姚晨是一名演员，殊不知她还学习过舞蹈呢，姚晨的性格很好，给人一种大大咧咧，诙谐爱笑的印象，就像她在《武林外传》中饰演的郭芙蓉一角，说到...',
    image: '//upload-images.jianshu.io/upload_images/7722639-be14d502fd8d5398.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    switch: true,
    like: '9.2',
    urerName: '卖灯的美食人',
    comment: '4',
    commenUri: '',
    collect: '47'
  },
  {
    title: '早春时尚看姚晨，蓝色蝴蝶结衬衫配短裙，倍儿潮还倍儿醒脑！',
    uri: '/',
    Introduction:
      '大家都知道姚晨是一名演员，殊不知她还学习过舞蹈呢，姚晨的性格很好，给人一种大大咧咧，诙谐爱笑的印象，就像她在《武林外传》中饰演的郭芙蓉一角，说到...',
    image: '//upload-images.jianshu.io/upload_images/7722639-be14d502fd8d5398.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    switch: true,
    like: '9.2',
    urerName: '卖灯的美食人',
    comment: '4',
    commenUri: '',
    collect: '47'
  },
  {
    title: '早春时尚看姚晨，蓝色蝴蝶结衬衫配短裙，倍儿潮还倍儿醒脑！',
    uri: '/',
    Introduction:
      '大家都知道姚晨是一名演员，殊不知她还学习过舞蹈呢，姚晨的性格很好，给人一种大大咧咧，诙谐爱笑的印象，就像她在《武林外传》中饰演的郭芙蓉一角，说到...',
    image: '//upload-images.jianshu.io/upload_images/7722639-be14d502fd8d5398.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    switch: true,
    like: '9.2',
    urerName: '卖灯的美食人',
    comment: '4',
    commenUri: '',
    collect: '47'
  },
  {
    title: '早春时尚看姚晨，蓝色蝴蝶结衬衫配短裙，倍儿潮还倍儿醒脑！',
    uri: '/',
    Introduction:
      '大家都知道姚晨是一名演员，殊不知她还学习过舞蹈呢，姚晨的性格很好，给人一种大大咧咧，诙谐爱笑的印象，就像她在《武林外传》中饰演的郭芙蓉一角，说到...',
    image: '//upload-images.jianshu.io/upload_images/7722639-be14d502fd8d5398.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    switch: true,
    like: '9.2',
    urerName: '卖灯的美食人',
    comment: '4',
    commenUri: '',
    collect: '47'
  }
];
