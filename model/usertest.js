const helloWord = function () {
    return "hello";
}

const sum = (value1, value2) => {
    return value1 + value2;
};


const getSqlQuery = (table, columns = []) => {
    const selectColumns = columns.length > 0 ? '' : '*';
    return `select ${selectColumns} from ${table}`;
}

module.exports = {
    helloWord, sum, getSqlQuery
}