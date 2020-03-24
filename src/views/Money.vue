<template>
    <Layout classPrefix="layout">
        <!--        {{recordList}}-->
        <Tags @update:value="onUpdateTags"
        />
        <div class="notes">
            <FormItem :value.sync="record.notes"
                      field-name="备注"
                      placeholder="在这里添加备注"
            />
        </div>
        <Tabs :data-source="typeList" :value.sync="record.type"/>
        <NumberPad @submit="saveRecord"
                   :value.sync="record.amount"/>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Tags from '@/components/Money/Tags.vue';
    import FormItem from '@/components/Money/FormItem.vue';
    import NumberPad from '@/components/Money/NumberPad.vue';
    import Tabs from '@/components/Tabs.vue';

    @Component({
        components: {Tabs, NumberPad, FormItem, Tags},
    })
    export default class Money extends Vue {
        typeList = [{text: '支出', value: '-'},
            {text: '收入', value: '+'}
        ];

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

        saveRecord() {
            if (!this.record.tags || this.record.tags.length === 0) {
                window.alert('请至少选择一个标签');
            } else {
                this.record.notes = '';
                this.$store.commit('createRecord', this.record);
            }
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