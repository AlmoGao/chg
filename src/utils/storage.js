/**
 * 储存数据到本地
 */

export default {
  // 存储
  set(KEY, DATA) {
    localStorage.setItem(KEY, JSON.stringify(DATA));
  },
  // 获取
  get(KEY) {
    let data = null;
    try {
      data = JSON.parse(localStorage.getItem(KEY));
    } catch (e) {
      console.error(e);
    }
    return data;
  },
  remove(KEY) {
    try {
      localStorage.clear(KEY);
    } catch (e) {
      console.log(e);
    }
  },
};
