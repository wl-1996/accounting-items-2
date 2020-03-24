<template>
    <div class="tags">
        <div class="new">
            <button @click="create">新增标签</button>
        </div>
        <ul class="current">
            <li v-for="tag in tagList" :key="tag.id"
                @click="toggle(tag)"
                :class="{selected: selectedTags.indexOf(tag) > -1}">{{tag.name}}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Tags extends Vue {
        beforeCreate() {
            this.$store.commit('fetchTags');
        }

        tagList: Tag[] = this.$store.state.tagList;
        selectedTags: Tag[] = [];

        toggle(value: Tag) {
            const index = this.selectedTags.indexOf(value);
            if (index > -1) {
                this.selectedTags.splice(index, 1);
            } else {
                this.selectedTags.push(value);
            }
            this.$emit('update:value', this.selectedTags);
        }

        create() {
            const name = window.prompt('请输入标签名');
            if (!name || name.match(/^[ ]+$/)) {
                window.alert('标签名不能为空');
            } else {
                this.$store.commit('createTag',name);
                window.alert('添加成功');
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
        background: white;

        .current {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;

            $bg: #D9D9D9;

            li {
                padding: 2px 17.5px;
                background: $bg;
                border-radius: 18px;
                margin-right: 24px;
                margin-top: 10px;
                color: #484848;
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