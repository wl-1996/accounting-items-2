<template>
    <Layout class="wrapper">
        <Tabs class-prefix="type" :data-source="typeList" :value.sync="type"/>
        <ol v-if="groupdList.length > 0">
            <li v-for="(group,index) in groupdList" :key="index">
                <h3 class="title">
                    {{beautify(group.title)}}
                    <span>￥{{group.total}}</span>
                </h3>
                <ol>
                    <li class="record" v-for="item in group.items" :key="item.id">
                        <span>{{tagString(item.tags)}}</span>
                        <span class="notes">{{item.notes}}</span>
                        <span>￥{{item.amount}}</span>
                    </li>
                </ol>
            </li>
        </ol>
        <div v-else class="noResult">该类型没有记录，请添加后进行查看</div>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Tabs from '@/components/Tabs.vue';
    import dayjs from 'dayjs';
    import clone from '@/lib/clone';

    @Component({
        components: {Tabs}
    })
    export default class Statistics extends Vue {
        tagString(tags: Tag[]) {
            return tags.length === 0 ? '无' : tags.map(i => i.name).join('，');
        }

        beautify(title: string) {
            const nowDate = dayjs();
            const thatDay = dayjs(title);
            if (thatDay.isSame(nowDate, 'day')) {
                return '今天';
            } else if (thatDay.isSame(nowDate.subtract(1, 'day'), 'day')) {
                return '昨天';
            } else if (thatDay.isSame(nowDate.subtract(2, 'day'), 'day')) {
                return '前天';
            } else if (thatDay.isSame(nowDate, 'year')) {
                return thatDay.format('M月D日');
            } else {
                return thatDay.format('YYYY年M月D日');
            }
        }

        beforeCreate() {
            this.$store.commit('fetchRecords');
        }

        get recordList() {
            return this.$store.state.recordList as RecordItem[];
        }

        get groupdList() {
            const {recordList} = this;

            const newRecordList = clone(recordList).filter(r => r.type === this.type).sort((a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf());
            if (newRecordList.length === 0) {
                return [];
            }
            type Result = {
                title: string;
                total?: number;
                items: RecordItem[];
            }[];
            const result: Result = [{
                title: dayjs(newRecordList[0].createdAt).format('YYYY-M-D'),
                items: [newRecordList[0]]
            }];
            for (let i = 1; i < newRecordList.length; i++) {
                const current = newRecordList[i];
                const last = result[result.length - 1];
                if (dayjs(last.title).isSame(dayjs(current.createdAt), 'day')) {
                    last.items.push(current);
                } else {
                    result.push({title: dayjs(current.createdAt).format('YYYY-M-D'), items: [current]});
                }
            }
            console.log(result);
            result.map(group => {
                group.total = group.items.reduce((sum, item) => {
                    return sum + item.amount;
                }, 0);
            });
            return result;
        }

        type = '-';
        typeList = [{text: '支出', value: '-'},
            {text: '收入', value: '+'}
        ];

    }
</script>

<style lang="scss" scoped>
    .noResult{
        padding: 16px;
        text-align: center;
    }

    .wrapper {
        height: 100vh;
    }

    ::v-deep {
        ul li.interval-tabs-item {
            height: 48px;
        }

        .type-tabs-item {
            background: white;

            &.selected {
                background: #c4c4c4;

                &::after {
                    display: none;
                }
            }
        }
    }

    %item {
        padding: 0 16px;
        min-height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .title {
        @extend %item;
    }

    .record {
        @extend %item;
        background: white;
    }

    .notes {
        margin-right: auto;
        margin-left: 16px;
        color: #999;
    }
</style>