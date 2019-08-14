import Taro, {Component, Config} from "@tarojs/taro";
import {View} from "@tarojs/components";
import './index.less'

// import {AtButton} from "taro-ui";

// console.log(AtTag)

// let historyList = ['笔芯','衣服','男士T恤','女生','泡面 康师傅 大桶 箱','腊肠 广式'];

// const renderLabel = (list) => {
//   return list.map(v => {
//     return (
//       <AtTag>{v}</AtTag>
//     )
//   })
// };

class Index extends Component{

  config: Config = {
    navigationBarTitleText: '搜索',
    navigationStyle: 'custom',
    usingComponents: {
      'navbar': './navBar'
    }
  };

  clearHistory = () => {
    console.log(123)
  }

  render(): any {
    return (
      <View>
        <navbar />
        <View>
          <View className="panel-title">
            <span className="panel-title-left">历史搜索</span>
            <View className="panel-title-del" onClick={this.clearHistory}>清除</View>
          </View>
        </View>
      </View>
    )
  }
}

export default Index;
