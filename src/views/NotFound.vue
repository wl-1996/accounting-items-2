<template>
    <div>
        <div>路径错误，找不到页面</div>
        <div>
            <router-link to="/money">返回首页</router-link>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class NotFound extends Vue {

    }
</script>

<style lang="scss" scoped>

</style>