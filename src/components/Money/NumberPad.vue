<template>
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
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class NumberPad extends Vue {

    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/helper.scss";

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