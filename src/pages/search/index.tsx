import Taro, {Component, Config} from "@tarojs/taro";
import {View} from "@tarojs/components";
import './index.less';
import NavBar from './navBar'

import {observer, inject} from "@tarojs/mobx";
import HistorySuggest from './components/history-suggest'
import GuessSearch from './components/guess-search'
import SearchRes from './components/search-res'

type PageStateProps = {
  searchStore: {
    historyList: Array<any>,
    suggestList: Array<any>,
    clearHistory: Function,
    updateSuggest: Function,
  }
}

interface Index {
  props: PageStateProps;
  state: any;
}

// const renderLabel = (list) => {
//   return list.map(v => {
//     return (
//       <AtTag>{v}</AtTag>
//     )
//   })
// };

let searchVal = "";

@inject("searchStore")
@observer
class Index extends Component{

  config: Config = {
    navigationStyle: 'custom',
  };

  constructor(props) {
    super(props);
    this.state = {
      num: 3, // 1: 搜索建议列表，2: 搜索结果，3: 搜索历史和推荐
    }
  }

  componentDidShow(){
    // console.log('componentDidShow')
  }

  componentDidMount(): void {
    console.log('componentDidMount')
    console.log(this.$router)

    // Taro.showLoading({
    //   title: "加载中..."
    // }).then(res =>
    //   setTimeout(() => {
    //     Taro.hideLoading();
    //   }, 2000)
    // );
  }

  componentWillUnmount(): void {
    console.log('componentWillUnmount')
  }

  handleChange = (val) => {
    searchVal = val;
    let num = 3;
    if(searchVal) num = 1;
    this.setState({
      num
    });
    console.log('search page searchVal = ', val)
  };

  handleFocus = () => {
    let num = 3;
    if(searchVal) num = 1;
    this.setState({
      num
    });
    console.log('search page handleFocus = ')
  };

  handleConfirm = () => {
    if(!searchVal) searchVal = "placeHolder";
    this.setState({
      num: 2,
    });
    console.log('search page handleConfirm = ')
  };

  render(): any {
    const {searchStore} = this.props;
    const {num} = this.state;

    return (
      <View>
        <NavBar onChange={this.handleChange}
                onConfirm={this.handleConfirm}
                onFocus={this.handleFocus}/>
        {
          num === 1 ? <GuessSearch /> : (num ===2 ? <SearchRes /> : <HistorySuggest searchStore={searchStore}/>)
        }
      </View>
    )
  }
}

export default Index;
