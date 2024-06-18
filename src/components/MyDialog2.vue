<template>

    <el-wrapper-dialog title="xing" @handleConfirm="handleConfirm" @handleCancel="handleCancel">
        446
    </el-wrapper-dialog>

</template>

<script setup lang="ts">


const handleConfirm = () => {
    console.log('handleConfirm', props.name)
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
