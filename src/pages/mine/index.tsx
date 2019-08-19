import Taro, {Component, Config} from "@tarojs/taro";
import {View} from "@tarojs/components";

class Index extends Component{

  config: Config = {
    navigationBarTitleText: '我的'
  };

  render(): any {
    return (
      <View>
        我的
      </View>
    )
  }
}

export default Index;
