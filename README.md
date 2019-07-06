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
4. Typescript
5. html压缩
6. js压缩
7. 支持async await
6. 按需分割,支持异步代码拆分和按需加载
7. css压缩
8. css预处理
    1. 添加厂商前缀
    2. 添加normalize.css
    3.更多功能,前去postcss官网了解
9. 支持pwa离线浏览,采用 StaleWhileRevalidate策略,更改了workbox的默认的采用Google的CDN模式,使用的是本地包,避免翻墙问题
10. 支持根据文件命名chunks,可以清楚的了解到,每个页面加载了哪些组件和哪些node_modules
11. 支持lodash的按需加载
12. 支持antd UI库, 修复了antd 3的bug(该bug导致即使是使用了一个antd的一个button,也会将500多kb的icons打包进来)
13. 添加了BundleAnalyzerPlugin这个强大的包大小分析神器
14. 本地添加了node服务(server.js), 使其本地也能运行打包后的项目,运行代码如下
```js
node server
```
15. 采用express框架,默认20分钟的最大缓存时间,采用了服务端gzip压缩,配合webpack的CompressionWebpackPlugin,使得打包后的gz文件可以直接被服务器端调用,避免了服务器动态压缩的CPU压力

****
### 注意事项
1. less如果不采用css modules 的用法,会有冲突,可以修改配置,
****
### 目前已知缺陷
1. Windows下CleanWebpackPlugin工作可能会有问题,需要多次npm run build才能打包成功
