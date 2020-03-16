<template>
    <div class="notes">
        <label>
            <span>备注</span>
            <input v-model="value" type="text" placeholder="在这里添加备注">
        </label>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Notes extends Vue {
        value = '';


    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/helper.scss";

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
</style>