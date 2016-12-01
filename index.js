function makeColumns(count) {
    var arr = [];
    for (var i = 0; i < count; i++) {
        arr.push([]);
    }
    return arr;
}

function columnifyInArrays(items, cols) {
    var columns = makeColumns(cols);
    for (var i = 0; i < items.length; i++) {
        var columnIndex = ((i) % cols);
        columns[columnIndex].push(items[i]);
    }
    return columns;
}

function columnifyOrder(items, cols) {
    var columns = columnifyInArrays(items, cols),
        orderedItems = [];
    for (var i = 0; i < columns.length; i++) {
        var column = columns[i];
        for (var y = 0; y < column.length; y++) {
            var item = column[y];
            orderedItems.push(item);
        }
    }
    return orderedItems;
}

module.exports = {
    columnifyOrder: columnifyOrder,
    columnifyInArrays: columnifyInArrays
};