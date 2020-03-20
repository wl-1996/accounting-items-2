import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';
const recordListModel: RecordListModel = {
    data: [],
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
        return this.data;
    },
    create(data: RecordItem) {
        const record2 = clone(data);
        record2.createdAt = new Date();
        this.data.push(record2);
        this.save();
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    },
};

export default recordListModel;