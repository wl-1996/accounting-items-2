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
</style>

<style lang="scss" scoped>

</style>
