<template>
    <div>
        <router-view/>
        <hr>
        <div>
            <router-link to="/money">记账</router-link>
            |
            <router-link to="/labels">标签</router-link>
            |
            <router-link to="statistics">统计</router-link>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class App extends Vue {
    }
</script>

<style lang="scss">
    @import "~@/assets/styles/reset.scss";
</style>

<style lang="scss" scoped>

</style>
