<template>

    <el-wrapper-dialog :title="props.name" @handleConfirm="handleConfirm" @handleCancel="handleCancel">
        123
    </el-wrapper-dialog>

</template>

<script setup lang="ts">
import MyDialog2 from './MyDialog2.vue'
import {CommonUtils} from 'element-plus'
const handleConfirm = () => {
    CommonUtils.TsDialog(MyDialog2, {})
}
const props = defineProps<{
    name: string,
    hide: () => {}
}>()


const handleCancel = () => {
    console.log('handleCancel')
    props.hide()
}


</script>

<style lang="scss"></style>
