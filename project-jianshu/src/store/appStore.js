import { observable, action, configure, computed } from "mobx";
import { putCache, getCache } from '../helpers/helper'; 
import method from '../pages/bets/method'

configure({ enforceActions: 'always' })

class appStore{

  @observable user = null;
  @observable money = 0
  @observable lotterys = [];
  @observable betInfos = {};
  @observable layout = {
    filter: false,
    cateIndex: 0,
    subCateIndex: 0,
    methodIndex: 0
  }

  @action changeLayout({cateIndex=this.layout.cateIndex, subCateIndex=this.layout.subCateIndex, methodIndex = this.layout.methodIndex, filter = this.layout.filter}){
    this.layout = {
      cateIndex, subCateIndex, methodIndex, filter
    }
  }

  @computed get methodId(){
    const { cateIndex, subCateIndex, methodIndex, filter } = this.layout;
    const selectedMethod = _.filter(method.gameMethods, item => item.hidden == filter)[cateIndex].childs[subCateIndex].childs[methodIndex];
    return `${selectedMethod.mode}.${selectedMethod.parent}.${selectedMethod.name}`;
  }

  @action setUser = (user) => {
    this.user = user;
  }

  @action setMoney = (value) => {
    this.money = value;
  }

  @action setLotterys = (data) => {
    this.lotterys = data;
  }

  @action setBetInfos = (data) => {
    this.betInfos = data;
  }

  @computed get betCountdown(){
    if(_.isEmpty(this.betInfos)){
      return -1;
    }
    return (new Date(this.betInfos.nowstoptime).getTime() - new Date(this.betInfos.nowtime).getTime()) / 1000
  }
  
}

export default new appStore()