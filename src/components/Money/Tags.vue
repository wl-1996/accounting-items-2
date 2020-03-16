<template>
    <div class="tags">
        <div class="new">
            <button>新增标签</button>
        </div>
        <ul class="current">
            <li v-for="tag in dataSource" :key="tag"
                @click="toggle(tag)"
                :class="{selected: selectedTags.indexOf(tag) > -1}">{{tag}}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    @Component
    export default class Tags extends Vue {
        @Prop() dataSource: string[] | undefined;
        selectedTags: string[] = [];

        toggle(value: string) {
            const index = this.selectedTags.indexOf(value);
            if (index > -1) {
                this.selectedTags.splice(index, 1);
            } else {
                this.selectedTags.push(value);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/helper.scss";

    .tags {
        flex-grow: 1;
        font-size: 14px;
        display: flex;
        flex-direction: column-reverse;
        padding-left: 16px;

        .current {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;

            $bg: #D9D9D9;

            li {
                width: 49px;
                height: 24px;
                background: $bg;
                border-radius: 18px;
                margin-right: 24px;
                margin-top: 10px;
                color: #484848;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .selected {
                background: darken($bg, 20%);
                color: white;
            }
        }

        .new {
            margin-top: 17px;
            margin-bottom: 12px;

            button {
                color: #999999;
                border: none;
                background: transparent;
                width: 64px;
                height: 22px;
                border-bottom: 1px solid #666666;
            }
        }
    }
</style>