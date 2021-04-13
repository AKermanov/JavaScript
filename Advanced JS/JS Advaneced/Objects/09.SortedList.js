function createSortedList() {
    const list = [];

    const obj = {
        add,
        remove,
        get,
        size: 0
    };

    function add(element) {
        list.push(element);
        list.sort((a, b) => a - b);

        obj.size++;

        return obj;
    }

    function remove(index) {
        checkIndex(index);

        list.splice(index, 1);
        obj.size--;

        return obj;
    }

    function get(index) {
        checkIndex(index);

        return list[index];
    }

    function checkIndex(index) {
        if (index < 0 || index >= list.length) {
            throw new Error("Index is out of bounds");
        }
    }

    return obj;
}
