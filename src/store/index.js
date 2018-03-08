/**
 * Created by bigben on 2018/3/8.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

import editor from './modules/editor'

Vue.use(Vuex);

let state = {

};

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    modules: {
	    editor
    }
})








