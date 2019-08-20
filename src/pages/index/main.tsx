import {View, ScrollView, Button} from "@tarojs/components";
import Taro, {Component, Config} from "@tarojs/taro";

import './main.less'
import {AtIcon} from "taro-ui";
import {inject, observer} from "@tarojs/mobx";

import {mainGoodsType} from '../../store/main-goods'

type PageStateProps = {
  mainGoods: mainGoodsType;
}

interface Index {
  props: PageStateProps;
  state: any;
}

let menuList = ['精选', '种草', '超市', '电器', '女装', '生活', '箱包', '男士', '美妆'].map((v, i) => {
 return {
   active: i === 3,
   title: v,
   content: v+v,
 }
});

@inject("mainGoods")
@observer
class Index extends Component{

  config: Config = {
  };

  constructor(props) {
    super(props);
    this.state = {
      menuList,
      currentId: "menu-scroll-id-0",
    }
  }

  componentDidMount(): void {
    this.initData();
  }

  handleClick = (item) => {
    menuList = menuList.map((v, i) => {
      if(v.title === item.title) {
        this.setState({
          currentId: `menu-scroll-id-${i}`,
        });
        v.active = true;
      }else {
        v.active = false;
      }
      return v;
    });
    this.setState({
      menuList,
    })
  };

  handleAdd = () => {
    const { mainGoods } = this.props;
    mainGoods.addGoods(() => {});
  };

  initData = () => {
    const { mainGoods} = this.props;
    mainGoods.initGoodsList(() => {});
  };

  render(): any {
    const {mainGoods: {hisData}} = this.props;
    console.log(hisData.length)
    return (
      <View className="main">
        <ScrollView
          className='scrollview'
          scrollX
          scrollWithAnimation
          scrollLeft={0}
          lowerThreshold={50}
          upperThreshold={50}
        >
          {
            this.state.menuList.map((v, i) => {
              const cn = v.active ? "scroll-item scroll-item-active" : "scroll-item scroll-item-normal";
              return (
                <View className={cn}
                      key={i}
                      id={`menu-scroll-id-${i}`}
                      onClick={() => this.handleClick(v)}>
                  <View className="title">{v.title}</View>
                  <View className="content">{v.content}</View>
                  <AtIcon className="icon"
                          value='chevron-down'
                          size='20' color='#F00'
                          customStyle={{marginTop: '-10px', visibility: v.active ? 'visible' : 'hidden'}}/>
                </View>
              )
            })
          }
        </ScrollView>
        <View className="content">
          {
            hisData.map((v, i) => {
              return (
                <View className="item"
                      key={i}>
                  {v+i}
                </View>
              )
            })
          }
          <Button onClick={this.handleAdd}>添加</Button>
        </View>
      </View>
    )
  }
}

export default Index;
