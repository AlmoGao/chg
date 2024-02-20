// 时间转换为 yyyy-mm-dd hh:mm:ss 格式
export function getTimestr(timestamp) {
    const time = timestamp || Date.now()
    const currentDate = new Date(time);
    // 获取年、月、日、小时、分钟和秒
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // 月份从0开始，需要加1，并且补0
    const day = String(currentDate.getDate()).padStart(2, "0"); // 补0
    const hours = String(currentDate.getHours()).padStart(2, "0"); // 补0
    const minutes = String(currentDate.getMinutes()).padStart(2, "0"); // 补0
    const seconds = String(currentDate.getSeconds()).padStart(2, "0"); // 补0
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
  }