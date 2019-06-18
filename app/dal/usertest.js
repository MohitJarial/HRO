const helloWord = function () {
    return "hello";
}

const sum = (value1, value2) => {
    return value1 + value2;
};


const getSqlQuery = (table, columns, whereCondition) => {
    let selectColumns = '*'
    if (columns.length > 0) {
        selectColumns = columns;
    }

    let customQuery = `select ${selectColumns} from ${table}`;
    if (whereCondition.length > 0) {
        for (let [index,item] of whereCondition.entries()) {
            if (whereCondition.length > 1) {
                const clause = index == 0 ? ` where` : ` and`;
                customQuery = customQuery.concat(`${clause} ${Object.keys(item)[0]}='${Object.values(item)[0]}'`);
            }
            else
                customQuery = customQuery.concat(` where ${Object.keys(item)[0]}='${Object.values(item)[0]}'`);
        }
    }
    return customQuery
}



module.exports = {
    helloWord, sum, getSqlQuery
}

