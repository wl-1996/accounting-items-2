<template>
    <nav>
        <router-link active-class="selected" class="item" to="/money">
            <Icon name="money"/>
            记账
        </router-link>
        <router-link active-class="selected" class="item" to="/labels">
            <Icon name="label"/>
            标签
        </router-link>
        <router-link active-class="selected" class="item" to="statistics">
            <Icon name="statistics"/>
            统计
        </router-link>
    </nav>
</template>

<script lang="ts">


    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Nav extends Vue {

    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/helper.scss";

    nav {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        @extend %outerShadow;

        .item {
            padding: 2px 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .icon{
                width: 32px;
                height: 32px;
            }
        }

        .selected {
            color: $color-highLight;
        }
    }
</style>