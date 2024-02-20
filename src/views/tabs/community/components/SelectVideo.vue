<script>
import {
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  createElementVNode as _createElementVNode,
  vModelText as _vModelText,
  withDirectives as _withDirectives,
  renderList as _renderList,
  Fragment as _Fragment,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  normalizeClass as _normalizeClass,
  toDisplayString as _toDisplayString,
  withCtx as _withCtx,
  createCommentVNode as _createCommentVNode,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { getGlobalProperties } from "@/assets/js/utils.js";
export default {
  props: ["type"],

  setup(props, { emit }) {
    const store = useStore();
    const {
      askVideoVideoApi,
      askVideoUserVideoApi,
      searchApi,
      userVideoSearchApi,
    } = getGlobalProperties().$api;
    let videoList = ref([]);
    let video_title = ref("");
    let selectVideoList = ref([]);
    let list = ref([]);
    let finished = ref(false);
    let error = ref(false);
    let loading = ref(false);
    let page = ref(0);
    const recommendVideoList = computed(() => {
      return store.state.recommendVideoList;
    });

    const getVideoList = () => {
      if (props.type === 1) {
        askVideoUserVideoApi(
          {
            page: page.value,
          },
          "get"
        ).then((res) => {
          if (res.code === 0) {
            res.data.rows.forEach((item) => {
              item.isSelect = false;
            });
            videoList.value = videoList.value.concat(res.data.rows);
            loading.value = false;

            if (res.data.rows.length === 0) {
              finished.value = true;
            }
          }
        });
      } else {
        askVideoVideoApi(
          {
            page: page.value,
          },
          "get"
        ).then((res) => {
          if (res.code === 0) {
            res.data.rows.forEach((item) => {
              item.isSelect = false;
            });
            videoList.value = videoList.value.concat(res.data.rows);
            loading.value = false;

            if (res.data.rows.length === 0) {
              finished.value = true;
            }
          }
        });
      }
    }; // getVideoList();

    const onLoad = () => {
      loading.value = true;
      page.value++;
      getVideoList();
    };

    const reach = () => {
      if (!video_title.value) {
        page.value = 1;
        videoList.value = [];
        getVideoList();
        return;
      }

      if (props.type === 1) {
        userVideoSearchApi(
          {
            data: video_title.value,
          },
          "get"
        ).then((res) => {
          if (res.code === 0) {
            res.data.forEach((item) => {
              item.isSelect = false;
            });
            videoList.value = res.data;
            loading.value = false;
            finished.value = true;
          }
        });
      } else {
        searchApi(
          {
            data: video_title.value,
            page: page.value,
          },
          "get"
        ).then((res) => {
          if (res.code === 0) {
            res.data.forEach((item) => {
              item.isSelect = false;
            });
            videoList.value = res.data;
            loading.value = false;
            finished.value = true;
          }
        });
      }
    };

    const setVideo = () => {
      let json = selectVideoList.value.concat(recommendVideoList);
      let arr = []; //盛放去重后数据的新数组

      for (let item1 of json) {
        //循环json数组对象的内容
        let flag = true; //建立标记，判断数据是否重复，true为不重复

        for (let item2 of arr) {
          //循环新数组的内容
          if (item1.id == item2.id) {
            //让json数组对象的内容与新数组的内容作比较，相同的话，改变标记为false
            flag = false;
          }
        }

        if (flag && item1.id) {
          //判断是否重复
          arr.push(item1); //不重复的放入新数组。  新数组的内容会继续进行上边的循环。
        }
      }

      store.commit("SET_RECOMMEND_VIDEO_LIST", arr);
      close();
    };

    const selectVideo = (item) => {
      item.isSelect = !item.isSelect;
      selectVideoList.value = videoList.value.filter((item) => item.isSelect);
    };

    const close = () => {
      selectVideoList.value = [];
      emit("close");
    };

    const _withScopeId = (n) => (
      _pushScopeId("data-v-917e0bb6"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "select_video",
    };
    const _hoisted_2 = {
      class: "head_title",
    };

    const _hoisted_3 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "span",
        {
          class: "title",
        },
        "选择视频",
        -1
      )
    );

    const _hoisted_4 = {
      class: "seach_input_box",
    };
    const _hoisted_5 = {
      class: "video_list",
    };
    const _hoisted_6 = ["onClick"];
    const _hoisted_7 = {
      class: "info-videoCover",
    };
    const _hoisted_8 = {
      class: "info-videoCover-img",
    };
    const _hoisted_9 = {
      class: "info-videoInfo",
    };
    const _hoisted_10 = {
      key: 0,
      class: "noData",
    };
    const _hoisted_11 = {
      class: "select_fot",
    };

    return (_ctx, _cache) => {
      const _component_van_icon = _resolveComponent("van-icon");

      const _component_my_image = _resolveComponent("my-image");

      const _component_van_list = _resolveComponent("van-list");

      const _component_no_data = _resolveComponent("no-data");

      return (
        _openBlock(),
        _createElementBlock("div", _hoisted_1, [
          _createElementVNode("div", _hoisted_2, [
            _createVNode(
              _component_van_icon,
              {
                size: "22",
                name: "arrow-left",
                onClick: close,
              },
              null,
              8,
              ["onClick"]
            ),
            _hoisted_3,
            _createElementVNode(
              "div",
              {
                class: "search",
                onClick:
                  _cache[0] ||
                  (_cache[0] = (...args) =>
                    reach && $reach(...args)),
              },
              "搜索"
            ),
          ]),
          _createElementVNode("div", _hoisted_4, [
            _withDirectives(
              _createElementVNode(
                "input",
                {
                  "onUpdate:modelValue":
                    _cache[1] ||
                    (_cache[1] = ($event) => (video_title.value = $event)),
                  placeholder: "输入标题名称搜索",
                },
                null,
                512
              ),
              [[_vModelText, video_title.value]]
            ),
          ]),
          _createElementVNode("div", _hoisted_5, [
            _createVNode(
              _component_van_list,
              {
                loading: loading.value,
                "onUpdate:loading":
                  _cache[2] ||
                  (_cache[2] = ($event) => (loading.value = $event)),
                error: error.value,
                "onUpdate:error":
                  _cache[3] ||
                  (_cache[3] = ($event) => (error.value = $event)),
                finished: finished.value,
                offset: 20,
                "error-text": "请求失败，点击重新加载",
                "finished-text": "-我也是有底线的-",
                "loading-text": "正在获取数据...",
                onLoad: onLoad,
              },
              {
                default: _withCtx(() => [
                  (_openBlock(true),
                  _createElementBlock(
                    _Fragment,
                    null,
                    _renderList(videoList.value, (item) => {
                      return (
                        _openBlock(),
                        _createElementBlock(
                          "div",
                          {
                            key: item.id,
                            onClick: () => selectVideo(item),
                            class: "info-videoItem",
                          },
                          [
                            _createElementVNode(
                              "div",
                              {
                                class: _normalizeClass([
                                  "select_box",
                                  item.isSelect ? "select" : "",
                                ]),
                              },
                              null,
                              2
                            ),
                            _createElementVNode("div", _hoisted_7, [
                              _createElementVNode("div", _hoisted_8, [
                                _createElementVNode("div", null, [
                                  _createVNode(
                                    _component_my_image,
                                    {
                                      url: item.image,
                                    },
                                    null,
                                    8,
                                    ["url"]
                                  ),
                                ]),
                              ]),
                              _createElementVNode(
                                "span",
                                null,
                                _toDisplayString(item.times),
                                1
                              ),
                            ]),
                            _createElementVNode("div", _hoisted_9, [
                              _createElementVNode(
                                "p",
                                null,
                                _toDisplayString(item.title),
                                1
                              ),
                              _createElementVNode("div", null, [
                                _createElementVNode(
                                  "span",
                                  null,
                                  _toDisplayString(item.count) + "次播放",
                                  1
                                ),
                              ]),
                            ]),
                          ],
                          8,
                          _hoisted_6
                        )
                      );
                    }),
                    128
                  )),
                ]),
                _: 1,
              },
              8,
              ["loading", "error", "finished", "onLoad"]
            ),
            videoList.value.length === 0
              ? (_openBlock(),
                _createElementBlock("div", _hoisted_10, [
                  _createVNode(_component_no_data, {
                    text: "暂无数据",
                    color: "#999",
                  }),
                ]))
              : _createCommentVNode("", true),
          ]),
          _createElementVNode("div", _hoisted_11, [
            _createElementVNode(
              "span",
              null,
              "已选择" +
                _toDisplayString(selectVideoList.value.length) +
                "个视频",
              1
            ),
            _createElementVNode(
              "div",
              {
                class: "undefined",
                onClick:
                  _cache[4] ||
                  (_cache[4] = (...args) =>
                    setVideo && setVideo(...args)),
              },
              "完成"
            ),
          ]),
        ])
      );
    };
  },
};
</script>
