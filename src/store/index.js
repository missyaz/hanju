import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//引入模块仓库
import bing from './bing'
import eyesVideo from "./eyesVideo";

//大仓库
export default new Vuex.Store({
    modules:{
        bing,
        eyesVideo
    }
})