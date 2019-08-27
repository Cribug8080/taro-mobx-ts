import Taro, {Component, Config} from "@tarojs/taro";
import {View} from "@tarojs/components";
import {inject, observer} from "@tarojs/mobx";
import {goodsDetailType} from "../../store/goods-detail";

interface Index {
  props: {
    goodsDetail: goodsDetailType,
  },
  state: {
    goodsId: number,
  }
}

@inject("goodsDetail")
@observer
class Index extends Component{

  config: Config = {
    navigationBarTitleText: '商品详情'
  };

  constructor(props) {
    super(props);
    this.state = {
      goodsId: 0
    }
  }

  componentDidShow(): void {
    const {goodsDetail} = this.props;
    goodsDetail.initGoodsDetail({
      id: this.$router.params.goodsId,
    });
  }

  handleClick = function(args) {
    this.setState({
      current: args,
    })
  };

  render(): any {
    const {goodsDetail} = this.props;
    return (
      <View>
        {JSON.stringify(goodsDetail.hisData)}
      </View>
    )
  }
}

export default Index;
