import Taro, {Component, Config} from "@tarojs/taro";
import {View} from "@tarojs/components";

class Index extends Component{

  config: Config = {
    navigationBarTitleText: '活动页面'
  };

  render(): any {
    return (
      <View>
        活动页面
      </View>
    )
  }
}

export default Index;
