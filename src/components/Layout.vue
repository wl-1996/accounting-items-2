<template>
    <div class="layout-wrapper">
        <div class="content" :class="classPrefix && classPrefix + '-content'">
            <slot></slot>
        </div>
        <Nav/>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Layout',
        props: ['classPrefix']
    };
</script>

<style lang="scss" scoped>
    .layout-wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh;

        > .content {
            margin-bottom: 10vh;
            flex-grow: 1;
            /*overflow: auto;*/
        }
    }
</style>