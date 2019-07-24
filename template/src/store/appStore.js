import { observable, action, configure, computed } from 'mobx';
import { putCache, getCache } from '../helpers/helper';
import method from '../pages/bets/method';

configure({ enforceActions: 'always' });

class appStore {
  @observable user = '';
  @action changeLayout(
    {
      // cateIndex = this.layout.cateIndex,
      // subCateIndex = this.layout.subCateIndex,
      // methodIndex = this.layout.methodIndex,
      // filter = this.layout.filter
    }
  ) {
    this.layout = {
      // cateIndex,
      // subCateIndex,
      // methodIndex,
      // filter
    };
  }

  // @computed get methodId(){
  //   const { cateIndex, subCateIndex, methodIndex, filter } = this.layout;
  //   const selectedMethod = _.filter(method.gameMethods, item => item.hidden == filter)[cateIndex].childs[subCateIndex].childs[methodIndex];
  //   return `${selectedMethod.mode}.${selectedMethod.parent}.${selectedMethod.name}`;
  // }
}

export default new appStore();
