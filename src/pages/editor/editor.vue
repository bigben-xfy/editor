<template>

    <div class="editor-container">
        <!--<div class="test-div" v-hammer:pan="onPan" :style="{'top': `${top}px`, 'left': `${left}px`}"></div>-->
        <shape :eData="sData"></shape>
        <designer-image :eData="iData"></designer-image>

        <button @click="print">test</button>
        <button @click="save">submit</button>
        <input type="text" v-model="sData.width">
    </div>

</template>

<script>
    import { mapGetters } from 'vuex'

    import shape from '../../component/shape'
    import designerImage from '../../component/designerImage'

	export default {
        created() {

        },
        components: {
	        shape,
	        designerImage
        },
        data() {
        	return {

            }
        },
        computed: {
            ...mapGetters({
	            shapeData: 'shapeData',
	            imageData: 'imageData'
            }),
            sData() {
            	return this.shapeData
            },
            iData() {
            	return this.imageData
            }
        },
        mounted() {

        },
        methods: {
        	print() {
        		console.log(this.sData)
            },
            save() {
        		this.$store.dispatch('setShapeData', this.sData)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../style/color";

    .editor-container {
        height: 100%;
    }

    .test-div {
        width: 150px;
        height: 150px;
        background-color: $red;
        position: absolute;
        top: 50px;
        left: 50px;
    }

</style>