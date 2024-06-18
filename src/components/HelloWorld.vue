<template>
    <div class="hello">
        <el-button type="primary" @click="openDialog">确定</el-button>

    </div>
</template>

<script lang="ts" setup>
import { CommonUtils } from 'element-plus'
import MyDialog from './MyDialog.vue';
import { Component } from 'vue';

const openDialog = () => {
    
    CommonUtils.TsDialog(MyDialog, {
        name: 'wangxing'
    })
    tt(MyDialog)
}

const tt = (a: Component) => {

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
