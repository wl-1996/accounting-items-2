<template>
    <div>
        <router-view/>
        <hr>
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
    @import "~@/assets/styles/helper.scss";

    body {
        line-height: 1.5;
        font-family: $font-hei;
        color: #333;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: #f5f5f5;
    }
</style>

<style lang="scss" scoped>

</style>
