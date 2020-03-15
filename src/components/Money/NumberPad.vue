<template>
    <div class="numberPad">
        <div class="output">{{this.output}}</div>
        <div class="buttons">
            <button @click="changeOutput">1</button>
            <button @click="changeOutput">2</button>
            <button @click="changeOutput">3</button>
            <button @click="remove">删除</button>
            <button @click="changeOutput">4</button>
            <button @click="changeOutput">5</button>
            <button @click="changeOutput">6</button>
            <button @click="clear">清空</button>
            <button @click="changeOutput">7</button>
            <button @click="changeOutput">8</button>
            <button @click="changeOutput">9</button>
            <button class="ok">OK</button>
            <button @click="changeOutput" class="zero">0</button>
            <button @click="changeOutput">.</button>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class NumberPad extends Vue {
        output = '0';

        changeOutput(event: MouseEvent) {
            const button = event.target as HTMLButtonElement;
            const input = button.textContent;
            //计算机最多只能输入16位
            if (this.output.length === 16) {
                return;
            }
            if (this.output === '0') {
                if (input && ('0123456789').indexOf(input) > -1) {
                    this.output = input;
                } else {
                    this.output += input;
                }
            } else {
                if (this.output.indexOf('.') > -1 && input === '.') {
                    return;
                }
                this.output += input;
            }
        }

        remove() {
            this.output = this.output.substring(0, this.output.length - 1);
            if (this.output.length === 0) {
                this.output = '0';
            }
        }

        clear() {
            this.output = '0';
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/helper.scss";


    .numberPad {
        .output {
            font-size: 36px;
            font-family: Consolas, monospace;
            text-align: right;
            min-height: 72px;
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