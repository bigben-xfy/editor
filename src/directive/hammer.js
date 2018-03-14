
import Hammer from 'hammerjs'

import _ from 'lodash'


const gestures = ['tap', 'pan', 'pinch', 'press', 'rotate', 'swipe', 'doubletap']
//const directions = ['up', 'down', 'left', 'right', 'horizontal', 'vertical', 'all']

export const VueHammer = {
	config: {},
	customEvents: {},
	install: function (Vue) {
		const _this = this
		Vue.directive('hammer', {
			bind(el, binding) {
				
				if(!el.hammer) {
					el.hammer = new Hammer.Manager(el)
				}
				
				const mc = el.hammer
				
				const event = binding.arg
				if (!event) {
					console.warn('[vue-hammer] event type argument is required.')
				}
				//console.log(binding)
				
				_this.config[event] = {}
				
				let recognizerType, recognizer
				
				if(_this.customEvents[event]) {
					const custom = _this.customEvents[event]
					recognizerType = custom.type
					recognizer = new Hammer[_this.capitalize(recognizerType)](custom)
					recognizer.recognizeWith(mc.recognizers)
					mc.add(recognizer)
				}else {
					recognizerType = gestures.find(gesture => gesture === event)
					if (!recognizerType) {
						console.warn(
							`[vue-hammer] invalid event type ${event} for ${binding.rawName}`
						)
						return
					}
					
					recognizer = mc.get(recognizerType)
					if (!recognizer) {
						// add recognizer
						recognizer = new Hammer[_this.capitalize(recognizerType)]()
						if(typeof binding.value === 'object' && binding.value.options) {
							recognizer.set(binding.value.options)
						}
						
						recognizer.recognizeWith(mc.recognizers)
						mc.add(recognizer)
					}
					
					/*const globalOptions = VueHammer.config[recognizerType]
					if (globalOptions) {
						_this.guardDirections(globalOptions)
						recognizer.set(globalOptions)
					}
					
					const localOptions =
						el.hammerOptions &&
						el.hammerOptions[recognizerType]
					if (localOptions) {
						_this.guardDirections(localOptions)
						recognizer.set(localOptions)
					}*/
					
				}
			},
			
			inserted(el, binding) {
				const mc = el.hammer
				const actionType = binding.rawName.split('.')[1]
				let event = `${binding.arg}${actionType ? actionType : ''}`
				
				if(event === 'doubletap') event = 'tap'
				
				if (mc.handler) {
					mc.off(event, mc.handler)
				}
				
				if (typeof binding.value !== 'function') {
					
					if(typeof binding.value === 'object' && binding.value.callback && typeof binding.value.callback === 'function') {
						mc.on(event, (mc.handler = binding.value.callback))
						return
					}
					
					mc.handler = null
					console.warn(
						`[vue-hammer] invalid handler function for ${binding.rawName}`
					)
				} else {
					mc.on(event, (mc.handler = binding.value))
				}
			},
			
			/*update(el, binding) {
				const mc = el.hammer
				const actionType = binding.rawName.split('.')[1]
				const event = `${binding.arg}${actionType ? actionType : ''}`
				
				if (mc.handler) {
					mc.off(event, mc.handler)
				}
				if (typeof binding.value !== 'function') {
					mc.handler = null
					console.warn(
						'[vue-hammer] invalid handler function for v-hammer: ' +
						binding.arg
					)
				} else {
					mc.on(event, (mc.handler = binding.value))
				}
			},*/
			
			unbind(el, binding) {
				const mc = el.hammer
				if (mc.handler) {
					el.hammer.off(binding.arg, mc.handler)
				}
				if (!Object.keys(mc.handlers).length) {
					el.hammer.destroy()
					el.hammer = null
				}
			},
			
		})
	},
	/*guardDirections(options) {
		let dir = options.direction
		if (typeof dir === 'string') {
			let hammerDirection = 'DIRECTION_' + dir.toUpperCase()
			if (directions.indexOf(dir) > -1 && Hammer.hasOwnProperty(hammerDirection)) {
				options.direction = Hammer[hammerDirection]
			} else {
				console.warn('[vue-hammer] invalid direction: ' + dir)
			}
		}
	},*/
	
	capitalize(str) {
		return str.charAt(0).toUpperCase() + str.slice(1)
	}
}













