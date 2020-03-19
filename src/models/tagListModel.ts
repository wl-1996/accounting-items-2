const localStorageKeyName = 'tagList';
type Tag = {
    id: string;
    name: string;
}
type TagListModel = {
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => string;
    save: () => void;
}
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
                id: name,
                name: name
            };
            this.data.push(newTag);
            this.save();
        }
        return name;
    }
};

export default tagListModel;