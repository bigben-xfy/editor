<template>

    <div class="cropper-container" v-hammer:tap="doubleTapObject">
        <div class="image-container" :style="outerStyleObject" v-if="!showCropper">
            <div class="animation-container">
                <img
                    src="../image/header.png"
                    :style="imageStyleObject"
                    v-hammer:pan.start="onPanStart"
                    v-hammer:pan="onPan"
                    v-hammer:pan.end="onPanEnd"

                >
            </div>
        </div>

        <div class="image-cropper" v-if="showCropper">
            <img src="../image/header.png" alt="">
        </div>
    </div>



</template>

<script>
    //import { mapGetters } from 'vuex'

    import Cropper from 'cropperjs'

	export default {
		name: "designerImage",
        props: ['eData'],
        created() {

        },
        data() {
            return {
	            startX: 0,
	            startY: 0,
	            startFlag: false,
	            proportion: 16/9,
                showCropper: false
            }
        },
        computed: {
			doubleTapObject() {
			    return {
			    	event: 'tap',
                    callback: this.onDoubleTap,
                    options: {
			    		taps: 2
                    }
                }
            },
	        imageData() {
		        return this.eData
	        },
	        outerStyleObject() {
		        if(this.eData) {
		        	return {
				        width: `${this.imageData.width}px`,
				        height: `${this.imageData.height}px`,
				        top: `${this.imageData.top}px`,
				        left: `${this.imageData.left}px`
                    }
                }else {
		        	return {
				        display: 'none'
                    }
                }
	        },
            imageStyleObject() {
	            if(this.eData) {
	            	return {
			            width: `${this.imageData.innerWidth}px`,
			            height: `${this.imageData.innerHeight}px`,
			            top: `${this.imageData.innerTop}px`,
			            left: `${this.imageData.innerLeft}px`
                    }
                }else return {}
            },
            cropperOptions() {
				return {
					strict: false,
					doubleClickToggle: false,
					checkImageOrigin: false,
					aspectRatio: this.proportion,
                }
            }
        },
        mounted() {
            
        },
        methods: {
	        onPan(e) {
		        this.imageData.left = this.startX + e.deltaX
		        this.imageData.top = this.startY + e.deltaY
	        },
	        onPanStart(e) {
		        if(!this.startFlag) {
			        this.startX = this.imageData.left
			        this.startY = this.imageData.top
			        this.startFlag = true
		        }
	        },
	        onPanEnd(e) {
		        this.startFlag = false
		        this.startX = 0
		        this.startY = 0
	        },
            onDoubleTap(e) {
	        	let ele = e.target

                if(ele.cropper) {

                }else {
	                //this.showCropper = true

                    console.log(ele.getElementsByClassName('image-cropper'))
	                /*ele.cropper = new Cropper(ele, this.cropperOptions)

	                console.log(ele.cropper)*/
                }
            }
        }
	}
</script>

<style lang="scss" scoped>

    .image-container {
        position: absolute;
    }

    .animation-container {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        overflow: hidden;

        img {
            position: absolute;
            -webkit-user-drag: none;
            user-select: none;
        }
    }

    .cropper-container {
        position: relative;
    }


</style>


















