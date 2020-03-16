<template>
    <Layout classPrefix="layout">
        {{record}}
        <Tags @update:value="onUpdateTags"
              :data-source.sync='tagList'
        />
        <Notes @update:value="onUpdateNotes"/>
        <Types :value.sync="record.type"/>
        <NumberPad :value.sync="record.amount"/>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Tags from '@/components/Money/Tags.vue';
    import Notes from '@/components/Money/Notes.vue';
    import Types from '@/components/Money/Types.vue';
    import NumberPad from '@/components/Money/NumberPad.vue';

    type Record = {
        tags: string[];
        notes: string;
        type: string;
        amount: number;
    }

    @Component({
        components: {NumberPad, Types, Notes, Tags}
    })
    export default class Money extends Vue {
        tagList: string[] = ['衣', '食', '住', '出'];
        record: Record = {
            tags: [],
            notes: '',
            type: '-',
            amount: 0,

        };

        onUpdateTags(value: string[]) {
            console.log(value);
            this.record.tags = value;
        }

        onUpdateNotes(value: string) {
            console.log(value);
            this.record.notes = value;
        }
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