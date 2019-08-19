import Taro, {Component, Config} from "@tarojs/taro";
import {View} from "@tarojs/components";
import {AtList, AtListItem} from "taro-ui";
import {searchStoreType} from '../../../store/search'

type PageStateProps = {
  searchStore: searchStoreType;
  onGuessClick: Function;
}

interface Index {
  props: PageStateProps;
  state: any;
}

class Index extends Component{

  config: Config = {
    navigationBarTitleText: ''
  };

  handleClick = (item) => {
    this.props.onGuessClick(item);
  };

  render(): any {
    const {searchStore: {guessList}} = this.props;
    return (
      <View>
        <AtList>
          {
            guessList.map((v, i) => {
              return <AtListItem title={v.title}
                                 key={i}
                                 onClick={() => {this.handleClick(v)}}
              />
            })
          }
        </AtList>
      </View>
    )
  }
}
const defaultProps = {
  searchStore: {
    historyList: [],
    suggestList: [],
    guessList: [],
    clearHistory: () => {},
    updateSuggest: () => {},
    updateGuess: () => {},
  },
  onGuessClick: () => {},
};
Index.defaultProps = defaultProps;

export default Index;
