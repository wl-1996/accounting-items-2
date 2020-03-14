<template>
    <Layout classPrefix="layout">
        <div class="tags">
            <div class="new">
                <button>新增标签</button>
            </div>
            <ul class="current">
                <li>衣</li>
                <li>食</li>
                <li>住</li>
                <li>行</li>
                <li>衣</li>
                <li>食</li>
                <li>住</li>
                <li>行</li>
                <li>衣</li>
                <li>食</li>
                <li>住</li>
                <li>行</li>
                <li>衣</li>
                <li>食</li>
                <li>住</li>
                <li>行</li>
                <li>衣</li>
                <li>食</li>
                <li>住</li>
                <li>行</li>
                <li>衣</li>
                <li>食</li>
                <li>住</li>
                <li>行</li>
                <li>衣</li>
                <li>食</li>
                <li>住</li>
                <li>行</li>
                <li>衣</li>
                <li>食</li>
                <li>住</li>
                <li>行</li>
            </ul>
        </div>
        <div class="notes">
            <label>
                <span>备注</span>
                <input type="text" placeholder="在这里添加备注">
            </label>
        </div>
        <div class="types">
            <ul>
                <li class="selected">支出</li>
                <li>收入</li>
            </ul>
        </div>
        <div class="numberPad">
            <div class="output">100</div>
            <div class="buttons">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button class="ok">OK</button>
                <button class="zero">0</button>
                <button>.</button>
            </div>
        </div>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Money extends Vue {

    }
</script>

<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column;

        > .tags {
            flex-grow: 1;
        }
    }
</style>

<style lang="scss" scoped>
    @import "~@/assets/styles/helper.scss";

    .tags {
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

    .notes {
        padding-left: 16px;
        background: rgb(245, 245, 245);
        font-size: 14px;

        label {
            display: flex;
            align-items: center;

            span {
                color: #333333;
                padding-right: 16px;
            }

            input {
                border: transparent;
                background: transparent;
                padding: 25px 16px 25px 0;
                flex-grow: 1;
            }
        }
    }

    .types {
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

    .numberPad {
        .output {
            font-size: 36px;
            font-family: Consolas, monospace;
            text-align: right;
            height: 72px;
            line-height: 72px;
            padding-right: 16px;
            @extend %innerShadow;
        }

        .buttons {
            @extend %clearFix;

            button {
                width: 25%;
                height: 64px;
                font-size: 18px;
                color: #000000;
                float: left;
                background: transparent;
                border: none;

                &.ok {
                    float: right;
                    height: 128px;
                }

                &.zero {
                    width: 50%;
                }

                $bg: #f2f2f2;

                &:nth-child(1) {
                    background: $bg;
                }

                &:nth-child(2), &:nth-child(5) {
                    background: darken($bg, 4%);
                }

                &:nth-child(3), &:nth-child(6), &:nth-child(9) {
                    background: darken($bg, 8%);
                }

                &:nth-child(4), &:nth-child(7), &:nth-child(10) {
                    background: darken($bg, 12%);
                }

                &:nth-child(8), &:nth-child(11), &:nth-child(13) {
                    background: darken($bg, 16%);
                }

                &:nth-child(14) {
                    background: darken($bg, 20%);
                }

                &:nth-child(12) {
                    background: darken($bg, 24%);
                }
            }
        }
    }
</style>