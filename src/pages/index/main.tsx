import {View, Button} from "@tarojs/components";
import Taro, {Component, Config} from "@tarojs/taro";

import './main.less'
import {inject, observer} from "@tarojs/mobx";

import {mainGoodsType} from '../../store/main-goods'

type PageStateProps = {
  mainGoods: mainGoodsType;
}

interface Index {
  props: PageStateProps;
  state: any;
}

@inject("mainGoods")
@observer
class Index extends Component{

  config: Config = {
  };

  constructor(props) {
    super(props);
    this.state = {
      currentId: "menu-scroll-id-0",
    }
  }

  componentDidMount(): void {
    this.initData();
  }

  handleAdd = () => {
    const { mainGoods } = this.props;
    mainGoods.addGoods(() => {});
  };

  initData = () => {
    const { mainGoods} = this.props;
    mainGoods.initGoodsList(() => {});
  };

  handleGoodsDetail = function(item) {
    Taro.navigateTo({
      url: `/pages/goods/index?goodsId=${item.key}`,
    });
  };

  render(): any {
    const {mainGoods: {hisData}} = this.props;
    const aa = hisData.map((v, i) => {
      v.img = `https://raw.githubusercontent.com/Cribug8080/images/master/weixin/c${(i+1)%4+1}.jpg`;
      return v;
    });
    return (
      <View className="main">
        <View className="content">
          {
            aa.map((v, i) => {
              return (
                <View className="item"
                      onClick={this.handleGoodsDetail.bind(this, v)}
                      key={i}>
                  <Image src={v.img} className="image"/>
                  <View>
                    <View className="name">{v.name}</View>
                    <View className="price">￥{v.price}</View>
                    <View className="desc">{v.desc}</View>
                  </View>
                </View>
              )
            })
          }
          <Button onClick={this.handleAdd}>加载更多</Button>
        </View>
      </View>
    )
  }
}

export default Index;
