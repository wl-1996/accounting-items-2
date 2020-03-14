<template>
    <Layout>
        <div class="tags">
            <ul class="current">
                <li>衣</li>
                <li>食</li>
                <li>住</li>
                <li>行</li>
            </ul>
            <div class="new">
                <button>新增标签</button>
            </div>
        </div>
        <div class="notes">
            <label>
                <span>备注</span>
                <input type="text" placeholder="在这里添加备注">
            </label>
        </div>
        <div class="types">
            <ul>
                <li class="selected">支出</li>
                <li>收入</li>
            </ul>
        </div>
        <div class="numberPad">
            <div class="output">0</div>
            <div class="buttons">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>OK</button>
                <button>0</button>
                <button>.</button>
            </div>
        </div>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Money extends Vue {

    }
</script>

<style lang="scss" scoped>
    .tags {
        .current {
            display: flex;
            flex-direction: row;
        }
    }

    .notes {

    }

    .types {
        ul {
            display: flex;
            flex-direction: row;

            li {

            }
        }
    }
</style>