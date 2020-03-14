<template>
    <div class="tags">
        <div class="new">
            <button>新增标签</button>
        </div>
        <ul class="current">
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Tags extends Vue {

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

            li {
                width: 49px;
                height: 24px;
                background: #D9D9D9;
                border-radius: 18px;
                margin-right: 24px;
                margin-top: 10px;
                color: #484848;
                display: flex;
                justify-content: center;
                align-items: center;
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