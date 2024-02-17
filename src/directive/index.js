/*
 * @Author: ian2020 ian2020008@gmail.com
 * @Date: 2022-09-02 01:09:06
 * @LastEditors: ian2020 ian2020008@gmail.com
 * @LastEditTime: 2022-09-02 01:13:24
 * @FilePath: /mysex/src/directive/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const installDirective = (app) => {
    app.directive("c-src", (el, binding) => {
      // this will be called for both `mounted` and `updated`
      el.src = require(binding.value);
    });
  };
  