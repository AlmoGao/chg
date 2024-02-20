<script>
import {
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  toDisplayString as _toDisplayString,
  createElementVNode as _createElementVNode,
  openBlock as _openBlock,
  createBlock as _createBlock,
  createCommentVNode as _createCommentVNode,
  renderList as _renderList,
  Fragment as _Fragment,
  createElementBlock as _createElementBlock,
  withCtx as _withCtx,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";

import { ref, computed, watch } from "vue";
import { useStore } from "vuex";
import { getGlobalProperties, getMyDate } from "@/assets/js/utils.js";
export default {
  name: "SearchPopup",
  props: {
    searchText: {
      type: String,
      default: "",
    },
    label_id: {
      type: [Number, String],
      default: "",
    },
    menu_id: {
      type: [Number, String],
      default: "",
    },
    label_name: {
      type: String,
      default: "",
    },
    type: {
      type: String,
    },
  },

  setup(props, { emit }) {
    const { searchApi, labelTypeApi, menuTypeApi, labelSearchApi } =
      getGlobalProperties().$api;
    const store = useStore();
    let page = ref(1);
    const finished = ref(false);
    const error = ref(false);
    const loading = ref(false);
    let showDetailsPopul = ref(false);
    let videoId = ref("");
    const showLoading = ref(true);
    const searchText = computed(() => {
      
      return props.searchText;
    });
    const label_id = computed(() => {
      
      return props.label_id;
    });
    const menu_id = computed(() => {
      
      return props.menu_id;
    });
    const label_name = computed(() => {
      
      return props.label_name;
    }); // const searchText = ref(props.searchText);

    const detailsTitle = ref("");
    const tjList = ref([]);

    const search = () => {

      if (page.value === 1) {
        showLoading.value = true;
        finished.value = false;
      }

      detailsTitle.value = "#" + searchText.value;

      if (!label_id.value) {
        if (menu_id.value) {
          detailsTitle.value = searchText.value;
          menuTypeApi(
            {
              menu_id: menu_id.value,
              page: page.value,
            },
            "get"
          ).then((res) => {
            showLoading.value = false;

            if (res.code === 0) {
              tjList.value = tjList.value.concat(res.data.rows);
              loading.value = false;

              if (res.data.rows.length === 0) {
                finished.value = true;
              }
            }
          });
        } else if (label_name.value) {
          labelSearchApi(
            {
              label_name: label_name.value,
              page: page.value,
            },
            "get"
          ).then((res) => {
            showLoading.value = false;

            if (res.code === 0) {
              tjList.value = tjList.value.concat(res.data.rows);
              loading.value = false;

              if (res.data.rows.length === 0) {
                finished.value = true;
              }
            }
          });
        } else {
          searchApi(
            {
              data: searchText.value,
              page: page.value,
            },
            "get"
          ).then((res) => {
            showLoading.value = false;

            if (res.code === 0) {
              tjList.value = res.data;
              loading.value = false;
              finished.value = true;
            }
          });
        }
      } else {
        labelTypeApi(
          {
            label_id: label_id.value,
            menu_id: menu_id.value,
            page: page.value,
          },
          "get"
        ).then((res) => {
          showLoading.value = false;

          if (res.code === 0) {
            tjList.value = tjList.value.concat(res.data.rows);
            loading.value = false;

            if (res.data.rows.length === 0) {
              finished.value = true;
            }
          }
        });
      }
    };

    search();

    const onLoad = () => {
      loading.value = true;
      page.value++;
      search();
    };

    const videoPlay = (item) => {
      store.commit("SET_VIDEO_DETAILS", item);

      if (props.type === "details") {
        emit("close");
      } else {
        showDetailsPopul.value = true;
        videoId.value = Math.random();
      }
    };

    watch(searchText, () => {
      tjList.value = [];
      page.value = 1;
      search();
    });

    const close = () => {
      emit("close");
    };

    const close1 = () => {
      showDetailsPopul.value = false;
    };

    const _withScopeId = (n) => (
      _pushScopeId("data-v-4d2c86de"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "head_title",
    };
    const _hoisted_2 = {
      class: "title",
    };
    const _hoisted_3 = {
      key: 1,
      class: "cont_body",
    };
    const _hoisted_4 = {
      key: 0,
      class: "info-recommend",
    };
    const _hoisted_5 = ["onClick"];
    const _hoisted_6 = {
      class: "info-videoCover",
    };
    const _hoisted_7 = {
      class: "info-videoCover-img",
    };
    const _hoisted_8 = {
      class: "info-videoInfo",
    };
    const _hoisted_9 = {
      key: 1,
      class: "no-data",
    };
    const _hoisted_10 = {
      class: "details_page",
    };
    const _hoisted_11 = {
      class: "cont_body",
    };

    return (_ctx, _cache) => {
      const _component_van_icon = _resolveComponent("van-icon");

      const _component_Loading = _resolveComponent("Loading");

      const _component_my_image = _resolveComponent("my-image");

      const _component_van_list = _resolveComponent("van-list");

      const _component_no_data = _resolveComponent("no-data");

      const _component_video_details = _resolveComponent("video-details");

      const _component_van_popup = _resolveComponent("van-popup");

      return (
        _openBlock(),
        _createElementBlock("div", null, [
          _createElementVNode("div", _hoisted_1, [
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
            _createElementVNode(
              "span",
              _hoisted_2,
              _toDisplayString(detailsTitle.value),
              1
            ),
          ]),
          showLoading.value
            ? (_openBlock(),
              _createBlock(_component_Loading, {
                key: 0,
              }))
            : (_openBlock(),
              _createElementBlock("div", _hoisted_3, [
                tjList.value.length
                  ? (_openBlock(),
                    _createElementBlock("div", _hoisted_4, [
                      _createVNode(
                        _component_van_list,
                        {
                          loading: loading.value,
                          "onUpdate:loading":
                            _cache[0] ||
                            (_cache[0] = ($event) => (loading.value = $event)),
                          error: error.value,
                          "onUpdate:error":
                            _cache[1] ||
                            (_cache[1] = ($event) => (error.value = $event)),
                          finished: finished.value,
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
                              _renderList(tjList.value, (item, index) => {
                                return (
                                  _openBlock(),
                                  _createElementBlock(
                                    "div",
                                    {
                                      key: index,
                                      class: "info-videoItem",
                                      onClick: () =>
                                        videoPlay(item),
                                    },
                                    [
                                      _createElementVNode("div", _hoisted_6, [
                                        _createElementVNode("div", _hoisted_7, [
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
                                          _toDisplayString(
                                            getMyDate(item.created, 2)
                                          ),
                                          1
                                        ),
                                      ]),
                                      _createElementVNode("div", _hoisted_8, [
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
                                            _toDisplayString(
                                              item.user_label || ""
                                            ),
                                            1
                                          ),
                                          _createElementVNode(
                                            "span",
                                            null,
                                            _toDisplayString(item.count) +
                                              "次播放",
                                            1
                                          ),
                                        ]),
                                      ]),
                                    ],
                                    8,
                                    _hoisted_5
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
                    ]))
                  : (_openBlock(),
                    _createElementBlock("div", _hoisted_9, [
                      _createVNode(_component_no_data, {
                        color: "#ffffff",
                      }),
                    ])),
              ])),
          _createVNode(
            _component_van_popup,
            {
              show: showDetailsPopul.value,
              "onUpdate:show":
                _cache[2] ||
                (_cache[2] = ($event) => (showDetailsPopul.value = $event)),
              class: "popup_coentent",
              overlay: false,
              position: "right",
            },
            {
              default: _withCtx(() => [
                _createElementVNode("div", _hoisted_10, [
                  _createElementVNode("div", _hoisted_11, [
                    (_openBlock(),
                    _createBlock(
                      _component_video_details,
                      {
                        key: videoId.value,
                        onClose: close1,
                      },
                      null,
                      8,
                      ["onClose"]
                    )),
                  ]),
                ]),
              ]),
              _: 1,
            },
            8,
            ["show"]
          ),
        ])
      );
    };
  },
};
</script>
