import Vue from 'vue';
import Vuex from 'vuex';
import * as calendarStore from './calendarStore';

Vue.use(Vuex);

const state = { ...calendarStore.state }

const getters = { ...calendarStore.getters }

const actions = { ...calendarStore.actions }

const mutations = { ...calendarStore.mutations }

export default new Vuex.Store({
    state,
    strict: false,
    getters,
    actions,
    mutations
})
