import Taro, {Component} from "@tarojs/taro";
import {View} from "@tarojs/components";

import './nav-bar.less'
import {AtSearchBar} from "taro-ui";

type PageStateProps = {
  onChange: Function;
  onFocus: Function;
  onConfirm: Function;
}

interface Index {
  props: PageStateProps;
  state: any;
}

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
    });
    this.props.onChange(value);
    console.log('nav bar', value)
  };

  handleConfirm = () => {
    this.props.onConfirm();
  };

  handleFocus = () => {
    this.props.onFocus();
  };

  render () {
    console.log(this.props);
    return (
      <View className='head-wrap' style={{marginTop: `${Taro.$navBarMarginTop}px`,}}>
        <View className="head_left_back" />
        <View className="head_right_search">
          {/*<input className="head_right_search_item" confirmType='search'/>*/}
          <AtSearchBar value={this.state.value}
                       onChange={this.handleChange}
                       className="searchNoBtn"
                       onConfirm={this.handleConfirm}
                       onFocus={this.handleFocus}
          />
        </View>
      </View>
    )
  }
}

export default Index;
