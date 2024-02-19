<script>
import {
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
} from "vue";

export default {
  setup() {
    return _openBlock(), _createElementBlock("div", null, "this.is DepositView");
  }
}
</script>
