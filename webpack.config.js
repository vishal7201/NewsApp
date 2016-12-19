var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
 devtool: 'cheap-module-eval-source-map',
 entry: {
   app: [
   'webpack/hot/dev-server',
   'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, "webclient", "clientapp.jsx")]
 },
 output: {
   path: path.join(__dirname, "webclient", "dist"),
   publicPath: "/dist/",
   filename: "bundle.js"
 },
 module: {
     loaders: [{
               test: /\.jsx$/,
               loaders: [
                            'babel?presets[]=react,presets[]=es2015,presets[]=stage-0'
                         ]
              },
              {
                test: /\.css$/,
                loader:"style-loader!css-loader",
                include: [/flexboxgrid/,/react-select/]
              }]
 },
 watch:true,
 resolve: {
   root:__dirname,
   alias:{
     Config:'config.js',
     MainComponent:'webclient/components/MainComponent',
     SearchContainer:'webclient/components/SearchContainer',
     NewsGetterComponent:'webclient/components/NewsGetterComponent',
     DisplayNewsComponent:'webclient/components/DisplayNewsComponent',
     NavComponent:'webclient/components/NavComponent',
     LoginComponent:'webclient/components/LoginComponent',
     SignUpComponent:'webclient/components/SignUpComponent',
     SavedNewsComponent:'webclient/components/SavedNewsComponent',
     SignUpContainer:'webclient/components/SignUpContainer',
     LoginComponent:'webclient/components/LoginComponent'
   },
   extensions: ['', '.js', '.jsx', '/index.js', '/index.jsx']
 },
 plugins: [new webpack.optimize.OccurenceOrderPlugin(),
       new webpack.HotModuleReplacementPlugin(),
       new webpack.NoErrorsPlugin(),
       new HtmlWebpackPlugin({ template: path.resolve('./webclient/index.html') })]
};
