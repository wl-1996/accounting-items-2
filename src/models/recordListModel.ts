const localStorageKeyName = 'recordList';
type RecordListModel = {
    data: RecordItem[];
    fetch: () => RecordItem[];
    save: () => void;
    clone: (data: RecordItem | RecordItem[]) => void;
}
const recordListModel: RecordListModel = {
    data: [],
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
        return this.data;
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    },
    clone(data: RecordItem | RecordItem[]) {
        return JSON.parse(JSON.stringify(data));
    }
};

export default recordListModel;