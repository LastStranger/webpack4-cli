/*插件的顺序貌似会影响打包的结果,测试结果显示如果cssnano不是最后一个,css的压缩就会失败*/
module.exports = ({ env }) => ({
    plugins: {
        // 'postcss-px2rem': {remUnit: 75},
        autoprefixer: {
            /* browsers这个key官方说有问题,用browserslist代替,我写在了package.json里面了,
          便于所有使用browserslist的插件都能使用这个key */
            // browsers: [
            //   '>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9',
            // ]
            // "browserslist": [
            //   "last 2 version",
            //   "> 2%"
            // ],
        },
        // 'postcss-uncss':{
        //   // "html": ['http://localhost:3456'],
        //   //   html: ['src/**/*.html'],
        //   //   html: ['src/index.html'],
        // },
        // 'uncss': {
        // html: ['src/*.html']
        // },
        // 'cssnano': env === 'production' ? {} : false,
        /*这个和OptimizeCSSAssetsPlugin
    是差不多一样的css压缩效果,使用这个会多少个类似css的文件就有多少行css,用那个只有两行,
    而且这个cssnano不好与normalizeCSS结合使用,因为px2rem不应该影响node_modules,但是cssnano应该影响node_modules,建议用OptimizeCSSAssetsPlugin效果良好*/
        // 'rucksack-css': {},
        // 'postcss-pxtorem': {rootValue: 75}
    },
    // plugins: [
    //   ctx.env === 'production' ? require('cssnano')() : console.log(ctx.env.length)
    // ]
    //   plugins: [
    //       require('postcss-uncss')
    //   ]
})
