<template>
    <div class="types">
        <ul>
            <li :class="type === '-' ? 'selected' : ''" @click="selectType('-')">支出</li>
            <li :class="type === '+' && 'selected'" @click="selectType('+')">收入</li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Types extends Vue {
        type= '-';

        selectType(type: string) {
            this.type = type;
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/helper.scss";

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
</style>