import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {

    entry: './src/index.jsx', 

    output: {
        path: path.join(__dirname, '/dist'), 
        filename: 'bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    resolve: {
        extensions: ['.js', '.jsx']
    },    

    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*' 
        },
        proxy: {
          '/api/**': 'http://localhost:3000/',
          secure: false
        },
      },
      
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },

            {
                test: /\.(jpg|jpeg|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'assets/[name].[hash:8].[ext]',
                        }
                    }
                ]
            }
        ]
    }
}