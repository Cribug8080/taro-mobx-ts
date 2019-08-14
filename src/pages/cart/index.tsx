import Taro, {Component, Config} from "@tarojs/taro";
import './index.less'
import { AtButton } from 'taro-ui'
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
        <AtButton>按钮文案</AtButton>
      </View>
    )
  }
}

export default Index;
