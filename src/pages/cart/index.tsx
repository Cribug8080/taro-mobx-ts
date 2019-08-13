import {Component, Config} from "@tarojs/taro";

class Index extends Component{

  config: Config = {
    navigationBarTitleText: '我的'
  };

  render(): any {
    return <div>
      购物车
    </div>
  }
}

export default Index;
