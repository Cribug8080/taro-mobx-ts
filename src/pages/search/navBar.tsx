import Taro, {Component} from "@tarojs/taro";
import {View} from "@tarojs/components";

import './nav-bar.less'
import {AtSearchBar} from "taro-ui";

class Index extends Component{

  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
  }

  handleChange = (value) => {
    this.setState({
      value,
    })
    console.log(value)
  }

  render () {
    return (
      <View className='head-wrap' style={{marginTop: `${Taro.$navBarMarginTop}px`,}}>
        <View className="head_left_back"></View>
        <View className="head_right_search">
          {/*<input className="head_right_search_item" confirmType='search'/>*/}
          <AtSearchBar value={this.state.value}
                       onChange={this.handleChange}
                       className="searchNoBtn"
          />
        </View>
      </View>
    )
  }
}

export default Index;
