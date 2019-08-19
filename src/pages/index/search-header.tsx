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
    const l1 = 'https://raw.githubusercontent.com/Cribug8080/images/master/weixin/l1.dpg';
    const l2 = 'https://raw.githubusercontent.com/Cribug8080/images/master/weixin/l2.dpg';
    const l3 = 'https://raw.githubusercontent.com/Cribug8080/images/master/weixin/l3.dpg';
    const l4 = 'https://raw.githubusercontent.com/Cribug8080/images/master/weixin/l4.dpg';
    const l5 = 'https://raw.githubusercontent.com/Cribug8080/images/master/weixin/l5.dpg';
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
        <View className="gun">
          <Swiper
            className='main'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular
            indicatorDots
            autoplay>
            <SwiperItem>
              <View className='image-wrap'>
                <Image className='image' src={l1}/>
              </View>
            </SwiperItem>
            <SwiperItem>
              <View className='image-wrap'>
                <Image className='image' src={l2}/>
              </View>
            </SwiperItem>
            <SwiperItem>
              <View className='image-wrap'>
                <Image className='image' src={l3}/>
              </View>
            </SwiperItem>
          </Swiper>
        </View>


      </View>
    )
  }
}

export default Index;
