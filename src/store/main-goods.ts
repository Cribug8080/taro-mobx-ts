import {observable} from 'mobx'
import api from "../service/api";

export type mainGoodsType = {
  goodsList: Array<any>;
  initGoodsList: Function;
  addGoods: Function;
}

const mainGoods = observable({
  hisData: [],
  initGoodsList (callback) {
    api.get('mall/index/goods').then(res => {
      this.hisData = res.data.data.list;
      console.log(this.hisData)
      callback && callback();
    }).catch((e) => {
      console.error(e);
      callback && callback();
    });
  },
  addGoods(callback) {
    api.get('mall/index/goods').then(res => {
      this.hisData.push(...res.data.data.list)
      callback && callback();
    }).catch((e) => {
      console.error(e);
      callback && callback();
    });
  },
});

export default mainGoods;
