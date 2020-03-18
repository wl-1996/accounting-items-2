<template>
    <Layout>
        <div class="tags">
            <router-link class="tag"
                         :to="`/labels/edit/${tag.id}`" v-for="tag in tagList" :key="tag.id">
                <span>{{tag.name}}</span>
                <Icon name="right"/>
            </router-link>
        </div>
        <button @click="create" class="createTag">新建标签</button>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import tagListModel from '@/models/tagListModel';

    tagListModel.fetch();
    @Component
    export default class Labels extends Vue {
        tagList: Tag[] = tagListModel.data;

        create() {
            const name = window.prompt('请输入标签名');
            if (!name || name.match(/^[ ]*$/)) {
                window.alert('标签名不能为空');
            } else {
                tagListModel.create(name);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tags {
        padding-left: 16px;
        display: flex;
        flex-direction: column;
        background: white;
        font-size: 16px;

         .tag {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 10px 10px 10px 0;
            border-bottom: 1px solid #e6e5e8;

            .icon {
                width: 18px;
                height: 18px;
                color: #333;
            }
        }
    }

    .createTag {
        margin-top: 44px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        width: 98px;
        height: 40px;
        color: white;
        background: #767676;
        border-radius: 4px;
        font-size: 16px;
    }
</style>