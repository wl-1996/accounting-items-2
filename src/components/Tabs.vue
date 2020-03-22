<template>
    <div class="tabs">
        <ul>
            <li :class="{selected: item.value === value,[classPrefix+'-tabs-item']: classPrefix}"
                @click="select(item)"
                v-for="item in dataSource" :key="item.value">{{item.text}}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    type DataSourceItem = { text: string; value: string }

    @Component
    export default class Tabs extends Vue {
        @Prop({required: true, type: Array}) dataSource!: DataSourceItem[];
        @Prop(String) readonly value!: string;
        @Prop(String) readonly classPrefix?: string;

        select(item: DataSourceItem) {
            this.$emit('update:value', item.value);
        }
    }
</script>

<style lang="scss" scoped>
    .tabs {
        ul {
            display: flex;
            flex-direction: row;
            background: #C4C4C4;
            font-size: 24px;
            color: #000000;

            li {
                width: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 64px;
                position: relative;

                &.selected::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 3px;
                    background: #333;
                }
            }
        }
    }
</style>