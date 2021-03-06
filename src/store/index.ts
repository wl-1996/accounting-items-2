import Vue from 'vue';
import Vuex from 'vuex';
import createId from '@/lib/createId';
import clone from '@/lib/clone';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        tagList: [] as Tag[],
        createTagError: null as tagError,
        recordList: [] as RecordItem[]
    },
    mutations: {
        fetchRecords(state) {
            state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]');
        },
        createRecord(state, recordItem: RecordItem) {
            const record2 = clone(recordItem);
            record2.createdAt = new Date().toISOString();
            state.recordList.push(record2);
            store.commit('saveRecords');
            window.alert('添加成功');
        },
        saveRecords(state) {
            window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
        },
        fetchTags(state) {
            state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
            if (!state.tagList || state.tagList.length === 0) {
                store.commit('createTag', '衣');
                store.commit('createTag', '食');
                store.commit('createTag', '住');
                store.commit('createTag', '行');
            }
        },
        saveTags(state) {
            window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
        },
        createTag(state, name) {
            const names = state.tagList.map(i => i.name);
            if (names.indexOf(name) > -1) {
                state.createTagError = new Error('标签名重复');
            } else {
                state.createTagError = null;
                const newTag = {
                    id: createId().toString(),
                    name: name
                };
                state.tagList.push(newTag);
                store.commit('saveTags');
            }
        },
        updateTag(state, payload: { id: string; name: string }) {
            const idList = state.tagList.map(i => i.id);
            //析构赋值
            const {id, name} = payload;
            if (idList.indexOf(id) > -1) {
                const names = state.tagList.map(i => i.name);
                if (names.indexOf(name) > -1) {
                    window.alert('标签名重复');
                } else {
                    const tag = state.tagList.filter(i => i.id === id)[0];
                    tag.name = name;
                    store.commit('saveTags');
                }
            } else {
                window.alert('not found');
            }
        },
        removeTag(state, id) {
            let index = -1;
            for (let i = 0; i < state.tagList.length; i++) {
                if (state.tagList[i].id === id) {
                    index = i;
                    break;
                }
            }
            state.tagList.splice(index, 1);
            store.commit('saveTags');
            window.alert('删除成功');
        }
    },
    actions: {},
    modules: {}
});

export default store;