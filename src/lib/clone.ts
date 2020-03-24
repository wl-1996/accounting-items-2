//T表示接受什么类型的参数就返回什么类型的数据，也可以不用T，用X都可以
function clone<T>(data: T): T {
    return JSON.parse(JSON.stringify(data));
}

export default clone;