import Taro, {Component, Config} from "@tarojs/taro";
import {View} from "@tarojs/components";
import {AtActivityIndicator, AtTag} from "taro-ui";
import fire from "../../../images/fire.png";
import { observer } from "@tarojs/mobx";
import './index.less';

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

@observer
class Index extends Component{
  config: Config = {

  };

  constructor(props) {
    super(props);
    this.state = {
      suggestLoading: false,
    }
  }

  clearHistory = () => {
    const { searchStore } = this.props;
    console.log(this.props)
    searchStore.clearHistory();
  };

  changeSuggest = () => {
    const { searchStore } = this.props;
    this.setState({
      suggestLoading: true
    });
    searchStore.updateSuggest(() => {
      this.setState({
        suggestLoading: false,
      })
    });
    console.log('changeSuggest')
  };

  refresh = () => {
    const { searchStore } = this.props;
    searchStore.refresh();
  };

  handleClickItem = (item) => {
    console.log(item);
  };

  render() {
    const { searchStore: { historyList, suggestList } } = this.props;
    return (
      <View className="history-suggest">
        <View style={{marginBottom: '30Px', display: historyList.length === 0 ? 'none' : 'block'}}>
          <View className="panel-title">
            <span className="panel-title-left">历史搜索</span>
            <View className="panel-title-del" onClick={this.clearHistory}>清除</View>
          </View>
          <View className="panel-main">
            {
              historyList.map((item, i) => {
                let obj = {"padding":"0 7Px","margin": "3Px 7Px"};
                if(item.hot) obj["background-color"] = "#ffeeee";
                return <AtTag key={i}
                              customStyle={obj}
                              className='panel-main-tab-item'>
                  {item.hot ? <Image src={fire} className="panel-main-tab-img"/> : null}
                  {item.label}
                </AtTag>
              })
            }
          </View>
        </View>
        <View>
          <View className="panel-title">
            <span className="panel-title-left">推荐搜索</span>
            <View className="panel-title-del" onClick={this.changeSuggest}>换一批</View>
          </View>
          <View className="panel-main">
            {
              suggestList.map((item, i) => {
                let obj = {"padding":"0 7Px","margin": "3Px 7Px"};
                if(item.hot) obj["background-color"] = "#ffeeee";
                return <AtTag key={i}
                              customStyle={obj}
                              onClick={() => {
                                this.handleClickItem(item)
                              }}
                              className='panel-main-tab-item'>
                  {item.hot ? <Image src={fire} className="panel-main-tab-img"/> : null}
                  {item.label}
                </AtTag>
              })
            }
            {
              this.state.suggestLoading ? <AtActivityIndicator
                size={64}
                mode='center'/> : null
            }
          </View>
        </View>
        <View className="panel-title-del" onClick={this.refresh}>还原</View>
      </View>
    )
  }
}

Index.defaultProps = {
  searchStore: {
    historyList: [],
    suggestList: [],
    clearHistory: () => {},
    updateSuggest: () => {},
  }
};

export default Index;
