<template>
    <Layout>
        <div class="navBar">
            <Icon name="left" @click.native="goBack"/>
            <span class="title">编辑标签</span>
        </div>
        <div class="form-wrapper">
            <FormItem @update:value="updateTag"
                      :value="tag.name"
                      placeholder="请输入标签名"
                      field-name="标签名"/>
        </div>
        <Button @click="remove">删除标签</Button>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import tagListModel from '@/models/tagListModel';
    import FormItem from '@/components/Money/FormItem.vue';
    import Button from '@/components/Button.vue';

    @Component({
        components: {Button, FormItem}
    })
    export default class EditLabel extends Vue {
        tag?: Tag = undefined;

        created() {
            const id = this.$route.params.id;
            tagListModel.fetch();
            const tags = tagListModel.data;
            const tag = tags.filter(i => i.id === id)[0];
            if (tag) {
                this.tag = tag;
            } else {
                this.$router.replace('/404');
            }
        }

        updateTag(value: string) {
            if (this.tag) {
                tagListModel.update(this.tag.id, value);
            }
        }

        remove() {
            if (this.tag) {
                tagListModel.remove(this.tag.id);
                this.$router.back();
            }
        }

        goBack() {
            console.log('1');
            this.$router.back();
        }
    }
</script>

<style lang="scss" scoped>
    .navBar {
        padding: 12px 10px;
        font-size: 16px;
        position: relative;
        background: white;

        > .title {
            display: inline-block;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }
    }

    .form-wrapper {
        margin-top: 8px;
        background: white;
        padding: 12px 0;
    }
</style>