/*
 * @Author: ian2020 ian2020008@gmail.com
 * @Date: 2022-08-21 11:44:49
 * @LastEditors: ian2020 ian2020008@gmail.com
 * @LastEditTime: 2022-09-01 23:06:46
 * @FilePath: /sex/src/assets/scss/js/registComponents.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  Button,
  Tabbar,
  TabbarItem,
  Search,
  Tab,
  Tabs,
  IndexBar,
  IndexAnchor,
  Lazyload,
  NavBar,
  Field,
  CellGroup,
  List,
  Swipe,
  SwipeItem,
  Skeleton,
} from "vant";
// 2. 引入组件样式
import "vant/lib/index.css";
const imports = require.context("@/components/mine/", false, /\.vue$/);
export function installVant(app) {
  app.component(Button.name, Button);
  app.component(Tabbar.name, Tabbar);
  app.component(TabbarItem.name, TabbarItem);
  app.component(Search.name, Search);
  app.component(Tab.name, Tab);
  app.component(Tabs.name, Tabs);
  app.component(IndexBar.name, IndexBar);
  app.component(IndexAnchor.name, IndexAnchor);
  app.component(NavBar.name, NavBar);
  app.component(Field.name, Field);
  app.component(CellGroup.name, CellGroup);
  app.component(List.name, List);
  app.component(Swipe.name, Swipe);
  app.component(SwipeItem.name, SwipeItem);
  app.component(Skeleton.name, Skeleton);
  // 注册时设置`lazyComponent`选项
  app.use(Lazyload, {
    lazyComponent: true,
  });
}

// export const installComponents = (app) => {
//   for (const key in imports) {
//     const component = imports[key];
//     app.component(component.default.name, component.default);
//   }
// };

export const installComponents = (app) => {
  imports.keys().forEach((key) => {
    const component = imports(key);
    app.component(component.default.name, component.default);
  });
  // for (const key in imports) {
  //   const component = imports(key);
  //   app.component(component.default.name, component.default);
  // }
};

export const install = (app) => {
  installVant(app);
  installComponents(app);
};
