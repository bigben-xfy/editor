import * as types from '../mutation-types'


const initState = {
	projectData: {
		templates: []
	},
	shapeData: {
		width: 150,
		height: 150,
		top: 50,
		left: 50
	},
	imageData: {
		url: 'http://localhost:8088/assets/image/header.png',
		width: 320,
		height: 160,
		left: 400,
		top: 50,
		innerWidth: 320,
		innerHeight: 160,
		innerTop: 0,
		innerLeft: 0,
	}
}

const state = {
	...initState,
	initState() {
		return initState
	}
}

const getters = {
	shapeData: state => state.shapeData,
	imageData: state => state.imageData
}

const actions = {
	setShapeData({commit}, param) {
		commit(types.SET_SHAPE_DATA, param)
	}
}

const mutations = {
	[types.SET_SHAPE_DATA](state, payload) {
		state.shapeData = payload
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}


















