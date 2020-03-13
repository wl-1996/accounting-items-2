<template>
    <div class="nav-wrapper">
        <div class="content">
            <p>Statistics.vue</p>
        </div>
        <Nav />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Statistics extends Vue {

    }
</script>

<style lang="scss" scoped>
    .nav-wrapper{
        height: 100vh;
        display: flex;
        flex-direction: column;

        >.content{
            flex-grow: 1;
            overflow: auto;
        }
    }
</style>