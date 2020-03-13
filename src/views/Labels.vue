<template>
    <div class="nav-wrapper">
        <div class="content">
            <p>Labels.vue</p>
        </div>
        <Nav />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Labels extends Vue {

    }
</script>

<style lang="scss" scoped>
    .nav-wrapper{
        display: flex;
        flex-direction: column;
        height: 100vh;

        >.content{
            flex-grow: 1;
            overflow: auto;
        }
    }
</style>