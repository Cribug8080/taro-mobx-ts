import Taro from '@tarojs/taro'

export const logError = (name, action, info = 'empty') => {
  let device = "";
  try {
    let deviceInfo = Taro.getSystemInfoSync() // 这替换成 taro的
    device = JSON.stringify(deviceInfo)
  } catch (e) {
    console.error('not support getSystemInfoSync api', e.message)
  }
  let time = new Date()
  console.error(time, name, action, info, device);
  // 如果使用了 第三方日志自动上报
  // if (typeof action !== 'object') {
  // fundebug.notify(name, action, info)
  // }
  // fundebug.notifyError(info, { name, action, device, time })
  if (typeof info === 'object') {
    info = JSON.stringify(info)
  }
};
