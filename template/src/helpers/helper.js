/**
 *
 * @param {*} param0 url地址
 * @param {*} successCallback 回调函数
 * @param {*} errorCallback
 */
export function sendHTTP({ url, method, data }, successCallback, errorCallback) {
  var postData = new URLSearchParams();
  if (data) {
    _.each(data, (value, key) => {
      postData.set(key, value);
    });
  }
  const domain = 'https://www.jianshu.com/';
  fetch(domain + url, {
    credentials: 'include',
    method: method || 'GET',
    body: data ? postData : null
  })
    .then(response => response.json())
    .then(res => {
      successCallback(res);
    })
    .catch(errorCallback);
}

export function putCache(key, value, expires) {
  // 未正确使用过期时间
  if (typeof expires !== 'number' || expires <= 0) {
    return;
  }
  var cacheData = { expires: expires, createDate: new Date(), data: value };
  window.localStorage.setItem(key, JSON.stringify(cacheData));
}

/**
 * 获取LS缓存
 * @param key 获取LS的键值
 */
export function getCache(key) {
  var cacheData = window.localStorage.getItem(key);
  if (!cacheData) {
    return null;
  }
  cacheData = JSON.parse(cacheData);
  // 判断是否过期
  var nowTime = new Date().getTime();
  var createTime = new Date(cacheData.createDate).getTime();
  if (nowTime - createTime > cacheData.expires * 1000) {
    window.localStorage.removeItem(key);
    return null;
  }
  return cacheData.data;
}

/**
 * 删除LS缓存
 * @param key 删除LS的键值
 */
export function removeCache(key) {
  window.localStorage.removeItem(key);
}
