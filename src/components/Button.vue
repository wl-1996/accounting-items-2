<template>
    <button @click="$emit('click',$event)" class="button">
        <slot></slot>
    </button>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Button extends Vue {
    }
</script>

<style lang="scss" scoped>
    .button {
        margin-top: 44px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        width: 98px;
        height: 40px;
        color: white;
        background: #767676;
        border-radius: 4px;
        font-size: 16px;
    }
</style>