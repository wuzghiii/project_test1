const path=require('path');
// （1）导入html-webpack-plugin
const HtmlPlugin=require('html-webpack-plugin')
//清理dist包
const CleanWebpackPlugin= require('clean-webpack-plugin');

// （2）创建插件的实例对象并指定参数
const htmlPlugin=new HtmlPlugin({
    template:'./src/index.html',//要复制的文件
    filename:'./index.html'//复制到哪里的文件
});

module.exports={
    mode:'development',//mode用来指定构建模式 可选值为development（开发）和production（上线
    output:{
        path:path.join(__dirname,'./realjs'),
        filename:'js/main.js'
    },
    //加入下面这段告知 webpack-dev-server，将 './' 目录下的文件 serve 到 localhost:8080 下(寄存到服务器下)
	devServer: {
		static: "./"
    },
    // （3）将实例对象挂载在plugins节点中
    plugins:[htmlPlugin,new CleanWebpackPlugin],


    // 配置加载css的loader节点
    // module:{
    //     rules:[{test:/\.css$/,use:['style-loader','css-loader']}
    //     ]
    // }
    module: {
        rules: [
            // 定义了不同模块对应的loader
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },

            //处理css中的图片
            {
                
                  // 处理图片资源
    test: /\.(jpg|png|gif)$/,
    // webpack5中使用assets-module（url-loader已废弃）
    type: 'asset',
    parser: {
        dataUrlCondition: {
            maxSize: 10 * 1024
        }
    },
    generator: {
        filename: 'img/[name].[hash:6][ext]',
        publicPath: './',
        outputPath:'img'
    }
            }
        ]
    }


}