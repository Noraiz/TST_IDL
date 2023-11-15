// 1.1 Write a function which takes array of numbers and and a function which will be called on each item and return the newly created array, in two ways : Declaritive and Imperative

/**
 * Declarative Styled Function 
 * @param {Array} list array of numbers
 * @param {Function} operation is any function that will run over each item in list
 * @returns 
 */
function declarativeStyle(list, operation) {
    return list.map(operation);
}


/**
 * Imperative Style
 * @param {Array} list array of numbers
 * @param {Function} operation is any function that will run over each item in list
 * @returns 
 */
function imperativeStyle(list, operation) {
    const resultantList = [];
    list.forEach(item=>{
        resultantList.push(operation(item))
    });
    return resultantList;
}



