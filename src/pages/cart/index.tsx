import Taro, {Component, Config} from "@tarojs/taro";
import './index.less'
import {View} from "@tarojs/components";

class Index extends Component{

  config: Config = {
    navigationBarTitleText: '购物车',
  };

  componentDidMount(): void {
  }

  render(): any {
    return (
      <View>
        购物车
      </View>
    )
  }
}

export default Index;
