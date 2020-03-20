import createId from '@/lib/createId';

const localStorageKeyName = 'tagList';
const tagListModel: TagListModel = {
    data: [],
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
        return this.data;
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    },
    create(name) {
        const names = this.data.map(i => i.name);
        if (names.indexOf(name) > -1) {
            window.alert('标签名不能重复');
        } else {
            const newTag = {
                id: createId().toString(),
                name: name
            };
            this.data.push(newTag);
            this.save();
        }
        return 'success';
    },
    update(id: string, name: string) {
        const idList = this.data.map(i => i.id);
        if (idList.indexOf(id) > -1) {
            const names = this.data.map(i => i.name);
            if (names.indexOf(name) > -1) {
                return 'duplicated';
            } else {
                const tag = this.data.filter(i => i.id === id)[0];
                tag.name = name;
                this.save();
                return 'success';
            }
        } else {
            return 'not found';
        }
    },
    remove(id: string) {
        let index = -1;
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id === id) {
                index = i;
                break;
            }
        }
        this.data.splice(index, 1);
        this.save();
        return true;
    }
};

export default tagListModel;