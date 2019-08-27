
export const getArgsStringfiy = function (args) {
  let res = '';
  Object.keys(args).forEach(v => {
    res += `&${v}=${args[v]}`;
  });
  return res.replace("&", "?")
};

export const getArgsParse = function (url) {
  let index = url.indexOf('?');
  let res = {};
  url.slice(index+1).split('&').forEach(v => {
    res[v.split('=')[0]] = v.split('=')[1];
  });
  return res;
};
