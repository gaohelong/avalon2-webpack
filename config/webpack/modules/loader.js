const base  = require('../base/base'),
      files = require('../base/files');

module.exports = (dev) => {
    let Config = {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [],
                include: [files.viewPath, files.staticPath, files.jsPath, files.htmlPath, files.componentPath],
                use: ['happypack/loader?id=JSX']
            },
            { // 处理HTML关于src链接问题
                test: /\.(html)$/,
                include: [files.htmlPath],
                use: ['happypack/loader?id=HTML']
            },
            {
                test: /\.(html)$/,
                exclude: [files.htmlPath],
                use: 'text-loader'
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/,
                include: [files.appPath],
                use: [
                {
                    loader: 'url-loader',
                    query: {
                        limit: 2000,
                        publicPath: '/',
                        name: 'assets/images/[name]-[hash:8].[ext]'
                    }
                },
                {
                    loader: 'image-webpack-loader',
                    query: {
                        progressive: true,
                        pngquant: {
                            quality: '65-90',
                            speed: 4
                        }
                    }
                }
                ]
            },
            {
                test: /\.(svg|ico|woff|eot|ttf)$/,
                include: [files.appPath],
                use: [
                {
                    loader: 'url-loader',
                    query: {
                        limit: 1,
                        publicPath: '/',
                        name: 'assets/fonts/[name]-[hash:8].[ext]'
                    }
                }
                ]
            }
        ]
    };

    /**
     * 区分各类css预处理
     **/
    let cssRules = {
        loader: 'css-loader',
        query: {
            modules: false,
            outputStyle: 'expanded',
            sourceMap: dev,
            sourceMapContents: dev
        }
    };

    function cssLoader(test, loader, type = 'string', path = [files.viewPath, files.sassPath]) {
        // console.log(loader);
        if (type == 'obj' && loader.loader.indexOf('sass') != -1) { // sass
            Config.rules.push({ // 独立CSS文件
                test: test, // 标准的CSS编译
                include: path,
                loaders: require('extract-text-webpack-plugin').extract({
                    fallback: 'style-loader',
                    use: [cssRules, loader]
                })
            });
        } else {
             Config.rules.push({ // 独立CSS文件
                test: test, // 标准的CSS编译
                include: path,
                loaders: require('extract-text-webpack-plugin').extract({
                    fallback: 'style-loader',
                    use: loader ? [cssRules, loader, 'postcss-loader'] : [cssRules, 'postcss-loader']
                })
            });
       
        }
    }

    cssLoader(/\.(css|pcss)$/, false);
    // cssLoader(/\.(sass|scss)$/, 'sass-loader');
    cssLoader(/\.(sass|scss)$/, {
        loader: "sass-loader?sourceMap&outputStyle=expanded&includePaths[]=" + require('path').resolve(__dirname, "../../../node_modules/compass-mixins/lib")
    }, 'obj');
    cssLoader(/\.(less)$/, 'less-loader');

    return Config;
};
