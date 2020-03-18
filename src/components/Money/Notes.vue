<template>
    <div class="notes">
        <label>
            <span>{{this.fieldName}}</span>
            <input v-model="value" type="text"
                   :placeholder="this.placeholder">
        </label>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop, Watch} from 'vue-property-decorator';

    @Component
    export default class Notes extends Vue {
        value = '';
        @Prop({required: true}) fieldName: string | undefined;
        @Prop({required: true}) placeholder: string | undefined;

        @Watch('value')
        onValueChanged(value: string) {
            this.$emit('update:value', value);
        }

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