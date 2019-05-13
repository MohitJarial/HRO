const sqlQueryBuilder = (table, columns, whereCondition, orderByColumn=[]) => {
    let selectColumns = '*'
    if (columns.length > 0) {
        selectColumns = columns;
    }

    let customQuery = `select ${selectColumns} from ${table}`;
    if (whereCondition.length > 0) {
        for (let [index, item] of whereCondition.entries()) {
            if (whereCondition.length > 1) {
                const clause = index == 0 ? ` where` : ` and`;
                customQuery = customQuery.concat(`${clause} ${Object.keys(item)[0]}='${Object.values(item)[0]}'`);
            }
            else
                customQuery = customQuery.concat(` where ${Object.keys(item)[0]}='${Object.values(item)[0]}'`);
        }
    }
    if (orderByColumn.length > 0) {
        for (let [index, item] of orderByColumn.entries()) {
            if (orderByColumn.length > 1) {
                const clause = index == 0 ? ` order by` : ',';
                customQuery = customQuery.concat(`${clause} ${Object.keys(item)[0]}`);
            }
            else
                customQuery = customQuery.concat(` order by ${Object.keys(item)[0]}`);
        }      
        customQuery = customQuery.concat(` desc`);
    }
    return customQuery
}




module.exports = {
    sqlQueryBuilder
}
