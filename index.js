function trimWith(array, fn) {
    var start = 0, end = array.length;
    while (start < array.length && fn(array[start])) start++;
    while (end > 0 && fn(array[end - 1])) end--;
    return array.slice(start, end);
}

module.exports = trimWith;
