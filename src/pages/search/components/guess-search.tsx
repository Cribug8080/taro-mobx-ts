import Taro, {Component, Config} from "@tarojs/taro";
import {View} from "@tarojs/components";
import {AtList, AtListItem} from "taro-ui";

class Index extends Component{

  config: Config = {
    navigationBarTitleText: '搜索建议'
  };

  handleClick = (item) => {
    console.log(item)
  }

  render(): any {
    return (
      <View>
        搜索建议
        <AtList>
          <AtListItem title='标题文字' onClick={this.handleClick} />
          <AtListItem title='标题文字' arrow='right' />
          <AtListItem title='标题文字' extraText='详细信息' />
          <AtListItem title='禁用状态' disabled extraText='详细信息' />
        </AtList>
      </View>
    )
  }
}

export default Index;
