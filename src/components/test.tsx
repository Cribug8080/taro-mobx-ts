import Taro, {Component, Config} from "@tarojs/taro";
import {View} from "@tarojs/components";

class Index extends Component{

  config: Config = {
    navigationBarTitleText: '测试'
  };

  render(): any {
    return (
      <View>
        测试
      </View>
    )
  }
}

export default Index;
