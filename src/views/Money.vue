<template>
    <Layout classPrefix="layout">
        <Tags/>
        <Notes/>
        <Types/>
        <NumberPad/>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Tags from '@/components/Money/Tags.vue';
    import Notes from '@/components/Money/Notes.vue';
    import Types from '@/components/Money/Types.vue';
    import NumberPad from '@/components/Money/NumberPad.vue';

    @Component({
        components: {NumberPad, Types, Notes, Tags}
    })
    export default class Money extends Vue {

    }
</script>

<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column;
    }
</style>

<style lang="scss" scoped>

</style>