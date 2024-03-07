import http from "./request";

// 视频分类
export const _video_class = () => {
  return http.get(`/content/video_class`, {
    custom: { toast: false, auth: true },
  });
};
// 全局配置
export const _index = (data) => {
  return http.post(`/index/index`, data, {
    custom: { auth: false, toast: true },
  });
};
// 首页视频
export const _index_video = (data) => {
  return http.post(`/content/index_video`, data, {
    custom: { auth: false, toast: true },
  });
};

// 轮播图
export const _carousel = (data) => {
  return http.post(`/index/carousel`, data, {
    custom: { auth: false, toast: true },
  });
};
// 轮播图
export const _banner = (data) => {
  return http.post(`/index/banner`, data, {
    custom: { auth: false, toast: true },
  });
};
// 图标广告
export const _iconad = (data) => {
  return http.post(`/index/iconad`, data, {
    custom: { auth: false, toast: true },
  });
};
// 社区
export const _community = (data) => {
  return http.post(`/content/community`, data, {
    custom: { auth: false, toast: true },
  });
};
// 小说
export const _novel = (data) => {
  return http.post(`/content/novel`, data, {
    custom: { auth: false, toast: true },
  });
};
// 分类视频
export const _findList = (data) => {
  return http.post(`/content/video`, data, {
    custom: { auth: false, toast: true },
  });
};