<template>
    <Layout classPrefix="layout">
        {{recordList}}
        <Tags @update:value="onUpdateTags"
              :data-source.sync='tagList'
        />
        <Notes @update:value="onUpdateNotes"/>
        <Types :value.sync="record.type"/>
        <NumberPad @submit="saveRecord"
                   :value.sync="record.amount"/>
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
        createdAt?: Date;
    }

    @Component({
        components: {NumberPad, Types, Notes, Tags}
    })
    export default class Money extends Vue {
        tagList: string[] = ['衣', '食', '住', '出'];
        recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');
        record: Record = {
            tags: [],
            notes: '',
            type: '-',
            amount: 0,
        };

        onUpdateTags(value: string[]) {
            this.record.tags = value;
        }

        onUpdateNotes(value: string) {
            this.record.notes = value;
        }

        saveRecord() {
            const record2: Record = JSON.parse(JSON.stringify(this.record));
            record2.createdAt = new Date();
            this.recordList.push(record2);
            window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
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