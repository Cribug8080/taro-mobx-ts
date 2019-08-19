import Taro, {Component, Config} from "@tarojs/taro";
import {View} from "@tarojs/components";

class Index extends Component{

  config: Config = {
    navigationBarTitleText: '商品详情'
  };

  constructor(props) {
    super(props);
    this.state = {
      goodsId: null,
    }
  }

  componentDidShow(): void {
    this.setState({
      goodsId: this.$router.params.goodsId,
    })
  }

  render(): any {
    return (
      <View>
        商品{this.state.goodsId}详情
      </View>
    )
  }
}

export default Index;
