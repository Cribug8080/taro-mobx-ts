import Taro, {Component, Config} from "@tarojs/taro";

class Index extends Component{

  config: Config = {
    navigationBarTitleText: '分类'
  };

  render(): any {
    return <div>
      分类
    </div>
  }
}

export default Index;
