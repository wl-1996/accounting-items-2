<template>
    <div class="formItem">
        <label>
            <span>{{this.fieldName}}</span>
            <input type="text"
                   :value="value"
                   @input="onValueChanged($event.target.value)"
                   :placeholder="this.placeholder">
        </label>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    @Component
    export default class FormItem extends Vue {
        @Prop({default: ''}) readonly value: string | undefined;
        @Prop({required: true}) fieldName: string | undefined;
        @Prop({required: true}) placeholder: string | undefined;

        onValueChanged(value: string) {
            this.$emit('update:value', value);
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/helper.scss";

    .formItem {
        padding-left: 16px;
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
                padding-right: 16px;
                flex-grow: 1;
            }
        }
    }
</style>