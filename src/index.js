import * as $ from 'jquery'
import './babel'
import Post from './Post'
import './styles/style.css'
import WebpackLogo from '@/assets/img/logo-webpack.png'
import json from './assets/json'
import './styles/test.scss'

const post = new Post('Webpack Post Title', WebpackLogo)
// $('pre').addClass('code1').html(post.toString())
// console.log('Post to sTring', post.toString())
// console.log('JSON:', json)
