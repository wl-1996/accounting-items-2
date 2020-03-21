<template>
    <Layout classPrefix="layout">
        <!--        {{recordList}}-->
        <Tags @update:value="onUpdateTags"
        />
        <div class="notes">
            <FormItem field-name="备注"
                      placeholder="在这里添加备注"
                      @update:value="onUpdateNotes"/>
        </div>
        <Types :value.sync="record.type"/>
        <NumberPad @submit="saveRecord"
                   :value.sync="record.amount"/>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Tags from '@/components/Money/Tags.vue';
    import FormItem from '@/components/Money/FormItem.vue';
    import Types from '@/components/Money/Types.vue';
    import NumberPad from '@/components/Money/NumberPad.vue';

    @Component({
        components: {NumberPad, Types, FormItem, Tags},
    })
    export default class Money extends Vue {
        beforeCreate() {
            this.$store.commit('fetchRecords');
        }

        recordList = this.$store.state.recordList;
        record: RecordItem = {
            tags: [],
            notes: '',
            type: '-',
            amount: 0,
        };

        onUpdateTags(value: Tag[]) {
            this.record.tags = value;
        }

        onUpdateNotes(value: string) {
            this.record.notes = value;
        }

        saveRecord() {
            this.$store.commit('createRecord', this.record);
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
    .notes {
        padding: 20px 0;
    }
</style>