import Button from './Button.vue'
import Icon from './Icon.vue'
import ButtonGroup from './ButtonGroup.vue'
import Table from './Table.vue'

const install = (Vue) => {
    //  把所有组件设为全局组件
    // Vue.component(Button.name, Button)
    // Vue.component(Icon.name, Icon)
    // Vue.component(ButtonGroup.name, ButtonGroup)

    // 使用 require.context(directory, useSubdirectories, regExp) 合并，三个参数分别是(读取文件的路径, 是否遍历文件的子目录, 匹配文件的正则) ,具体参照 MDN
    const requireComponent = require.context('.', true, /\.vue/);
    // console.log(requireComponent.keys());
    requireComponent.keys().forEach(fileName => {
        const config = requireComponent(fileName);
        // console.log(config);
        Vue.component(config.default.name, config.default)
    });
}

//  当 vue 是通过import 方式引入，即 放在模块内的，可通过 export default 默认导出；
//  当 vue 是在主页通过 <script> 标签 引入，此时 vue 是放在 window 下，需要手动调用；
if(typeof window.Vue !== "undefined")
    install(Vue);

export default {
    install
}