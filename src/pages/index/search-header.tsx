import Taro, {Component} from "@tarojs/taro";
import {Swiper, SwiperItem, View} from "@tarojs/components";

import iconCart from './../../images/cart.png';

import './index.less'
import {AtIcon} from "taro-ui";

type ItemObj = {
  url: String;
  isTab?: Boolean;
  txt?: String;
}

type PageStateProps = {
  left: ItemObj;
  right: ItemObj;
  main: ItemObj;
}

interface Index {
  props: PageStateProps;
  state: any;
}

class Index extends Component{

  handleClickLeft = () => {
    const { left } = this.props;
    this.handleClick(left);
  };

  handleClickRight = () => {
    const { right } = this.props;
    this.handleClick(right);
  };

  handleClickMain = () => {
    const { main } = this.props;
    this.handleClick(main);
  };

  handleClick = (item) => {
    if(item.isTab) {
      Taro.switchTab({
        url: item.url,
      })
    } else {
      Taro.navigateTo({
        url: item.url,
      })
    }
  };

  render(): any {
    return (
      <View>
        <View className="search-header">
          <Image src={iconCart} className="image image-left" onClick={ this.handleClickLeft }/>
          <View className="main" onClick={ this.handleClickMain }>
            <AtIcon value='search' size='20' color='#ccc' customStyle={{marginRight: '10px'}}></AtIcon>
            生日礼物
          </View>
          <Image src={iconCart} className="image image-right" onClick={ this.handleClickRight }/>
        </View>
      </View>
    )
  }
}

export default Index;
