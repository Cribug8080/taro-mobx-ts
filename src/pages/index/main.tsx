import {Swiper, SwiperItem, View} from "@tarojs/components";
import Taro, {Component, Config} from "@tarojs/taro";

import './index.less'

const imgs = new Array(5).fill(1).map((v, i) => {
  return {
    img: `https://raw.githubusercontent.com/Cribug8080/images/master/weixin/l${i+1}.dpg`,
    url: `/pages/goods/index?goodsId=${i+123}`,
  }
});

class Index extends Component{

  config: Config = {
    navigationBarTitleText: '商品详情'
  };

  handleClick = (item) => {
    Taro.navigateTo({
      url: item.url,
    });
  };

  render(): any {
    return (
      <View className="gun">
        <Swiper
          className='main'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay>
          {
            imgs.map((item, i) => {
              return (
                <SwiperItem key={i}>
                  <View className='image-wrap'>
                    <Image onClick={() => {
                      this.handleClick(item)
                    }} className='image' src={item.img}/>
                  </View>
                </SwiperItem>
              )
            })
          }
        </Swiper>
      </View>
    )
  }
}

export default Index;
