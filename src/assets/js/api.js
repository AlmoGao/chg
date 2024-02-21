/*
 * @Author: ian2020 ian2020008@gmail.com
 * @Date: 2022-08-24 19:37:49
 * @LastEditors: ian2020 ian2020008@gmail.com
 * @LastEditTime: 2022-08-25 11:49:21
 * @FilePath: /sex/src/assets/js/api.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from "axios";
import request from "@/assets/js/request.js";
let config = {
  registerAPI: "/api/v1/index/register",
  indexAPI: "/api/v1/user/index",
  loginApi: "/api/v1/login/login",
  homePageApi: "/api/v1/user/index",
  homeMenuApi: "/api/v1/index/menu",
  labelApi: "/api/v1/index/label",
  newApi: "/api/v1/index/new",
  recommendApi: "/api/v1/index/recommend",
  movieMakerApi: "/api/v1/index/movie_maker",
  fansApi: "/api/v1/index/fans",
  emphasisApi: "/api/v1/index/emphasis",
  dailyConcentrationApi: "/api/v1/index/daily_concentration",
  modifyPasswordApi: "/api/v1/user/modify_password",
  videoDetailsApi: "/api/v1/video/detail",
  similarApi: "/api/v1/video/similar",
  likeApi: "/api/v1/video/like",
  commentApi: "/api/v1/video/comment",
  commentSaveApi: "/api/v1/video/comment_save",
  focusSaveApi: "/api/v1/index/focus_save",
  concentrationApi: "/api/v1/index/concentration",
  bannerApi: "/api/v1/notice/banner",
  hotLabelApi: "/api/v1/search/hot_label",
  searchApi: "/api/v1/search/search",
  customerApi: "/api/v1/index/customer",
  groupApi: "/api/v1/index/group",
  inviteSaveApi: "/api/v1/user/invite_save",
  likeListApi: "/api/v1/user/like",
  noticeApi: "/api/v1/notice/index",
  hotAuthorApi: "/api/v1/search/hot_author",
  messageApi: "/api/v1/message/index",
  advertiseApi: "/api/v1/image/index",
  modifyNicknameApi: "/api/v1/user/modify_nickname",
  uploadApi: "/api/v1/user/upload",
  modifyTopImageApi: "/api/v1/user/modify_top_image",
  commissionApi: "/api/v1/user/commission",
  payApi: "/api/v1/video/pay",
  inviteLogApi: "/api/v1/user/invite_log",
  commissionLogApi: "/api/v1/user/commission_log",
  depositApi: "/api/v1/deposit/index",
  payLogApi: "/api/v1/user/pay_log",
  payConfigApi: "/api/v1/deposit/pay_config",
  depositPayApi: "api/v1/deposit/pay",
  autoerVideoApi: "/api/v1/user/video",
  labelTypeApi: "/api/v1/index/label_type",
  menuTypeApi: "/api/v1/index/menu_type",
  headLineNewApi: "/api/v1/head_lines/new",
  headLineHotApi: "/api/v1/head_lines/hot",
  askVideoNewApi: "/api/v1/ask_video/new",
  askVideoHotApi: "/api/v1/ask_video/hot",
  askVideoDetailApi: "/api/v1/ask_video/detail",
  headLineDetailApi: "/api/v1/head_lines/detail",
  askVideoRecommendApi: "/api/v1/ask_video/recommend",
  askVideoRewardApi: "/api/v1/ask_video/reward",
  askVideoRewardListApi: "/api/v1/ask_video/reward_list",
  askVideoUserVideoApi: "/api/v1/ask_video/user_video",
  askVideoVideoApi: "/api/v1/ask_video/video",
  askVideoWantApi: "/api/v1/ask_video/want",
  askVideoSubmitApi: "/api/v1/ask_video/submit",
  askVideoCommentListApi: "/api/v1/ask_video/comment_list",
  askVideoCommentLikeApi: "/api/v1/ask_video/comment_like",
  headLineCommentLikeApi: "/api/v1/head_lines/like",
  userAskVideoApi: "/api/v1/user/ask_video",
  userAskVideoLikeApi: "/api/v1/user/ask_video_like",
  userAskVideoSubmitApi: "/api/v1/user/ask_video_submit",
  userHeadLinesApi: "/api/v1/user/head_lines",
  userHeadLineLikesApi: "/api/v1/user/head_lines_like",
  userVideoSearchApi: "/api/v1/ask_video/user_video_search",
  askVideoConfirmApi: "/api/v1/ask_video/confirm",
  labelSearchApi: "/api/v1/search/label_search",
  testApi: "/api/v1/index/test_aes1",
  checkSidApi: "/api/v1/user/check_sid",
  modifyUserApi: "/api/v1/user/modify_user",
  askVideoSearchApi: "/api/v1/ask_video/search",
  comicsNewApi: "/api/v1/comics/new",
  comicsHotApi: "/api/v1/comics/hot",
  comicsSimilarApi: "/api/v1/comics/similar",
  comicsDetailsApi: "/api/v1/comics/detail",
  comicsLikeApi: "/api/v1/comics/like",
  comicsPayApi: "/api/v1/comics/pay",
  comicsDirectoryApi: "/api/v1/comics/directory",
  startApi: "/api/v1/index/start",
  feedbackSaveApi: "/api/v1/feedback/save",
  askVideoSaveApi: "/api/v1/ask_video/save",
  askVideoContinuationApi: "/api/v1/ask_video/continuation",
  modifyEmailApi: "/api/v1/user/modify_email",
  countApi: "/api/v1/image/count",
};
let api = {};
for (var k in config) {
  let url = config[k];
  api[k] = function (data, method = "post") {
    let obj = {
      url: url,
      method: method,
    };
    if (method === "post") {
      obj.data = data;
    } else {
      data ? (obj.params = data) : "";
    }
    return request({
      ...obj,
      // cancelToken: axios.CancelToken(function executor(c) {
      //   if (!window.CancelToken) window.CancelToken = {}
      //   window.CancelToken[k] = c;
      // }),
    });
  };
}

export default api;
