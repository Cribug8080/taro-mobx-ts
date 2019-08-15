import { observable } from 'mobx'

import api from '../service/api'

let historyList = [
  {
    label: '笔芯',
    hot: 1,
  },
  {
    label: '衣服',
    hot: 1,
  },
  {
    label: '男士T恤',
    hot: 0,
  },
  {
    label: '女生',
    hot: 0,
  },
  {
    label: '泡面 康师傅 大桶 箱',
    hot: 0,
  },
  {
    label: '腊肠 广式',
    hot: 0,
  },
];
let suggestList = [
  {
    label: '笔芯',
    hot: 1,
  },
  {
    label: '衣服',
    hot: 1,
  },
  {
    label: '男士T恤',
    hot: 0,
  },
  {
    label: '女生',
    hot: 0,
  },
  {
    label: '泡面 康师傅 大桶 箱',
    hot: 0,
  },
  {
    label: '腊肠 广式',
    hot: 0,
  },
];

//https://www.easy-mock.com/mock/5d5104f7cef7fe7b0911917e/mall/user/search-history
const searchStore = observable({
  historyList: historyList,
  suggestList: suggestList,
  clearHistory() {
    this.historyList = [];
  },
  updateSuggest(callback) {
    api.get('mall/user/search-history').then(res => {
      console.log(res.data.data.list)
      this.suggestList = res.data.data.list.map((v, i) => {
        v.hot = i < 2;
        return v;
      });
      callback && callback();
    }).catch(() => {
      callback && callback();
    })
  },
  refresh(){
    this.historyList = historyList;
    this.suggestList = suggestList;
  },
});
export default searchStore
