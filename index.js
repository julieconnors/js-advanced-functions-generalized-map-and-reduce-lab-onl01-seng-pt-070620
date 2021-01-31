function map(source, callBack) {
    let newList = [];
    for (let i = 0; i < source.length; i++) {

        newList.push(callBack(source[i]));
    }
    return newList;
}

function reduce(source, callBack, start) {
    let result = start;
    for (let i = 0; i < source.length; i++) {
         result = callBack(source[i]);
    }

    return result;
}