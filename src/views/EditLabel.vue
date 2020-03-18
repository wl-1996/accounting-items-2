<template>
    <Layout>
        <div class="editTag">
            <Icon name="left"/>
            <span>编辑标签</span>
        </div>
        <Notes placeholder="请输入标签名"
                field-name="标签名"/>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import tagListModel from '@/models/tagListModel';
    import Notes from '@/components/Money/Notes.vue';
    @Component({
        components: {Notes}
    })
    export default class EditLabel extends Vue {
        created() {
            const id = this.$route.params.id;
            tagListModel.fetch();
            const tags = tagListModel.data;
            const tag = tags.filter(i => i.id === id)[0];
            if (tag) {
                console.log(tag);
            } else {
                this.$router.replace('/404');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .editTag {
        padding: 5px 10px;

        > span {
            display: inline-block;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
        }

    }
</style>