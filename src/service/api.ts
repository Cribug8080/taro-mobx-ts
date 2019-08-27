import { HTTP_STATUS } from '../const/status'
import { logError } from '../utils/logError'
import Taro from '@tarojs/taro'
import { getArgsStringfiy } from './../utils/tools'

const baseURL = "https://www.easy-mock.com/mock/5d5104f7cef7fe7b0911917e/";

function baseOptions(params, method = 'GET') {
  let { url, data } = params
  // let token = getApp().globalData.token
  // if (!token) login()
  let contentType = 'application/x-www-form-urlencoded'
  contentType = params.contentType || contentType
  const option = {
    isShowLoading: false,
    loadingText: '正在加载',
    url: baseURL + url,
    data: data,
    method: method as "GET",
    header: { 'content-type': contentType},
    // header: { 'content-type': contentType, 'token': token },
    success(res) {
      if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
        return logError('api', '请求资源不存在')
      } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
        return logError('api', '服务端出现了问题')
      } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
        return logError('api', '没有权限访问')
      } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
        return res.data.data
      }
    },
    error(e) {
      logError('api', '请求接口出现问题', e)
    }
  };
  return Taro.request(option)
}

export default {
  baseOptions: baseOptions,
  get(url, data = '') {
    if(data) {
      url += getArgsStringfiy(data);
    }
    let option = { url, data }
    return this.baseOptions(option)
  },
  post: function (url, data, contentType) {
    let params = { url, data, contentType }
    return this.baseOptions(params, 'POST')
  }
};
