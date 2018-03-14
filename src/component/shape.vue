<template>

    <div class="test-div"
         :style="styleObject"
         v-hammer:pan.start="onPanStart"
         v-hammer:pan="onPan"
         v-hammer:pan.end="onPanEnd"
         v-hammer:tap="onTap"
    ></div>

</template>

<script>
	export default {
		name: "shape",
        props: ['eData'],
        data() {
		    return {
                startX: 0,
                startY: 0,
                startFlag: false
            }
        },
        computed: {
	        shapeData() {
	        	return this.eData
            },
	        styleObject() {
	        	if(this.eData) {
	        		return {
				        width: `${this.shapeData.width}px`,
				        height: `${this.shapeData.height}px`,
				        top: `${this.shapeData.top}px`,
				        left: `${this.shapeData.left}px`
                    }
                }else {
	        		return {
	        			display: 'none'
                    }
                }
            }
        },

        methods: {
	        onPan(e) {
		        this.shapeData.left = this.startX + e.deltaX
		        this.shapeData.top = this.startY + e.deltaY
            },
            onPanStart(e) {
                if(!this.startFlag) {
	                this.startX = this.shapeData.left
	                this.startY = this.shapeData.top
	                this.startFlag = true
                }
            },
            onPanEnd(e) {
                this.startFlag = false
	            this.startX = 0
	            this.startY = 0
            },
            onTap(e) {
	        	console.log('tap')
            }
        }
	}
</script>

<style lang="scss" scoped>
    @import "../style/color";

    .test-div {
        background-color: $red;
        position: absolute;
    }

</style>