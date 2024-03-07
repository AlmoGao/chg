import router from "@/router/index"

// 去播放
export const _goPlay = item => {
    localStorage.setItem("curr-video", JSON.stringify(item))
    router.push({
        name: 'video'
    })
}

// 复制
export function copyTxt(txt) {
    txt += "";
    if (txt == "null" || txt == "undefined" || txt == "") {
      return;
    }
    if (document.queryCommandSupported("copy")) {
      let textarea = document.createElement("textarea");
      textarea.value = txt;
      textarea.readOnly = "readOnly";
      document.body.appendChild(textarea);
      textarea.select(); // 选中文本内容
      textarea.setSelectionRange(0, txt.length);
      document.execCommand("copy");
      textarea.remove();
    }
  }
  