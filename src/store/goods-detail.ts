import {observable} from 'mobx'
import api from "../service/api";

export type goodsDetailType = {
  hisData: any;
  initGoodsDetail: Function;
}

const goodsDetail = observable({
  hisData: {},
  initGoodsDetail (args, callback) {
    api.get('goods/detail', args).then(res => {
      this.hisData = res.data.data;
      callback && callback();
    }).catch((e) => {
      console.error(e);
      callback && callback();
    });
  },
});

export default goodsDetail;
