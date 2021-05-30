import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入字体图标
import './assets/fonts/iconfont.css'

// 导入全局样式表
import './assets/css/global.css'
import TreeTable from 'vue-table-with-tree-grid'

// 导入富文本编辑器
import VueQuillEditor from 'vue-quill-editor'

// 富文本编辑器对应样式
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

import axios from 'axios'
// 配置请求根路径
axios.defaults.baseURL = 'http://itcgq.com:8888/api/private/v1/'
    // 配置请求拦截器
axios.interceptors.request.use((config) => {
    // 为请求头字段 添加Authorization 中的token认证
    config.headers.Authorization = window.sessionStorage.getItem('token')
    return config
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.use(VueQuillEditor)

Vue.component('tree-table', TreeTable)

// 注册全局的时间过滤器
Vue.filter('dataFormat', function(originVal) {
        const dt = new Date(originVal)

        const y = dt.getFullYear()
        const m = padZero(dt.getMonth() + 1)
        const d = padZero(dt.getDate())

        const hh = padZero(dt.getHours())
        const mm = padZero(dt.getMinutes())
        const ss = padZero(dt.getSeconds())

        return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
    })
    // 补0函数
function padZero(n) {
    return n > 9 ? n : '0' + n
}

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')