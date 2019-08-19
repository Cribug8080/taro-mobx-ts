import Taro, {Component, Config} from "@tarojs/taro";
import {View} from "@tarojs/components";
import {searchStoreType} from '../../../store/search'

type PageStateProps = {
  searchStore: searchStoreType;
}

interface Index {
  props: PageStateProps;
  state: any;
}

class Index extends Component{

  config: Config = {
    navigationBarTitleText: '搜索结果'
  };

  componentDidShow(): void {

  }

  render(): any {
    return (
      <View>
        搜索结果
      </View>
    )
  }
}

export default Index;
