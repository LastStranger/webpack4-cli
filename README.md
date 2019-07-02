# webpack4-cli
my research about webpack4
```js
npm start
npm run build
```
### 目前一些特性
1. less
2. css modules
3. react-hooks
4. html压缩
5. css压缩
6. js压缩
7. 支持async await
6. 按需分割
7. 按需加载
8. css预处理
    1. 添加厂商前缀
    2. 添加normalize.css
9. 支持pwa离线浏览,采用 StaleWhileRevalidate策略
10. 支持根据文件命名chunks
11. 支持异步代码拆分和按需加载
12. 支持lodash的按需加载
13. 支持antd UI库
****
### 目前已知缺陷
1. Windows下CleanWebpackPlugin工作可能会有问题,需要多次npm run build才能打包成功
