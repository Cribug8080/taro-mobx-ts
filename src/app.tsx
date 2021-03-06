import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Index from './pages/index'

import 'taro-ui/dist/style/index.scss'

import counterStore from './store/counter'
import searchStore from './store/search'
import mainGoods from './store/main-goods'
import goodsDetail from './store/goods-detail'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  counterStore,
  searchStore,
  mainGoods,
  goodsDetail,
};

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/mine/index',
      'pages/cart/index',
      'pages/classify/index',
      'pages/search/index',
      'pages/active/index',
      'pages/goods/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#ccc',
      selectedColor: 'red',
      backgroundColor	: '#fff',
      borderStyle	: 'black',
      list :[
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: './images/tab/home.png',
          selectedIconPath: './images/tab/home-active.png',
        },
        {
          pagePath: 'pages/classify/index',
          text: '分类',
          iconPath: './images/tab/classify.png',
          selectedIconPath: './images/tab/classify-active.png',
        },
        {
          pagePath: 'pages/cart/index',
          text: '购物车',
          iconPath: './images/tab/cart.png',
          selectedIconPath: './images/tab/cart-active.png',
        },
        {
          pagePath: 'pages/mine/index',
          text: '我的',
          iconPath: './images/tab/mine.png',
          selectedIconPath: './images/tab/mine-active.png',
        },
      ]
    }
  };

  componentDidMount () {
    Taro.getSystemInfo({}).then(res => {
      Taro.$navBarMarginTop = res.statusBarHeight || 0;
    })
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
