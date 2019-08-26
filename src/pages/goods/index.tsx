import Taro, {Component, Config} from "@tarojs/taro";
import {View} from "@tarojs/components";
import {AtTabBar} from "taro-ui";

class Index extends Component{

  config: Config = {
    navigationBarTitleText: '商品详情'
  };

  constructor(props) {
    super(props);
    this.state = {
      goodsId: null,
      current: 0
    }
  }

  componentDidShow(): void {
    this.setState({
      goodsId: this.$router.params.goodsId,
    })
  }

  handleClick = function(args) {
    this.setState({
      current: args,
    })
  };

  render(): any {
    return (
      <View>
        商品{this.state.goodsId}详情

      </View>
    )
  }
}

export default Index;
