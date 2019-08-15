import Taro, {Component, Config} from "@tarojs/taro";
import {View} from "@tarojs/components";

class Index extends Component{

  config: Config = {
    navigationBarTitleText: '搜索结果'
  };

  render(): any {
    return (
      <View>
        搜索结果
      </View>
    )
  }
}

export default Index;
