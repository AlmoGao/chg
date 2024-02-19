<script>
import {
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  createElementVNode as _createElementVNode,
  createStaticVNode as _createStaticVNode,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";

export default {
  name: "AskVideoGz",

  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };

    console.log({
      props,
      close,
    });

    const _withScopeId = (n) => (
      _pushScopeId("data-v-db4f7c6e"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "head_title",
    };

    const _hoisted_2 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "span",
        {
          class: "title",
        },
        "发布规则",
        -1
      )
    );

    const _hoisted_3 = /*#__PURE__*/ _createStaticVNode(
      '<div class="cont_body" data-v-db4f7c6e><div class="publishRule" data-v-db4f7c6e><p class="publishRule-title1" data-v-db4f7c6e>想看什么采友帮你找！</p><p class="publishRule-title2" data-v-db4f7c6e>用户可选择免费或赏金发布求片</p><p class="publishRule-title2" data-v-db4f7c6e>1.发布规则：</p><p class="publishRule-content" data-v-db4f7c6e> 禁止求片内容包含未成年、真实强奸、广告等内容，违者封禁账号 </p><p class="publishRule-content" data-v-db4f7c6e> 季度会议、年卡会员、永久会员发布求片无需申核，若发现违规内容则封禁账号取消会员资格 </p><p class="publishRule-title2" data-v-db4f7c6e>2.赏金求片：</p><p class="publishRule-content" data-v-db4f7c6e> 单次赏金求片最大期限为48小时，若48小时内无人接单，则悬赏失败，赏金返还赏主 </p><p class="publishRule-content" data-v-db4f7c6e> 在有推荐者的推荐情況下赏金低于50赏银，发布者只可选择一个推荐者采纳，超过48小时未选择打赏，则所有剩余赏金全部归于第一个推荐者 </p><p class="publishRule-content" data-v-db4f7c6e> 在有推荐者赏金高于50赏银，若推荐者视频不满足自己的需求，可选择不采纳，48小时候求片贴子失效，由平台审核后确认是否恶意不采纳，审校通过返回赏金给发布者，审核失败（恶意不采纳）则不返还赏金 </p><p class="publishRule-content" data-v-db4f7c6e> 创作者接单有什么好处？除接单可获取贸金外，接单数量越高则有机会名列排行榜得到更多曝光 </p><p class="publishRule-title2" data-v-db4f7c6e>温馨提示：</p><p class="publishRule-content" data-v-db4f7c6e> 赏金越高，获得高质量视频回复的可能性越大~ </p><p class="publishRule-title2" data-v-db4f7c6e>3.推荐片：</p><p class="publishRule-content" data-v-db4f7c6e> 推荐片子可选择推荐自己作品视频或平台视预，可选择免费或收费视频，免费视频被采纳的机率更高~ </p><p class="publishRule-content" data-v-db4f7c6e> 推荐者获取的赏金将会发放到钱包余额中，可用于消费或提现哟~~ </p></div></div>',
      1
    );

    return () => {
      const _component_van_icon = _resolveComponent("van-icon");

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
            _hoisted_2,
          ]),
          _hoisted_3,
        ])
      );
    };
  },
};
</script>
