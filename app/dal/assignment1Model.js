const sqlQueryBuilder = (table, columns, whereCondition, orderByColumn = [], mode = [], rowLimit = []) => {
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
        const orderBy = mode.length > 0 ? mode[0] : ``;
        customQuery = customQuery.concat(` ${orderBy}`);
    }
    if(rowLimit.length>0)
    {
        customQuery = customQuery.concat(` ${Object.keys(rowLimit[0])[0] } ${Object.keys(rowLimit[0])[1] }`) 
    }
    return customQuery.trim()
}


const sqlUpperCase = (table, columns, whereCondition, orderByColumn = [], mode = []) => {
    let selectColumns = '*'
    if (columns.length > 0) {
        selectColumns = columns;
    }

    let customQuery = `SELECT ${selectColumns} FROM ${table}`;
    if (whereCondition.length > 0) {
        for (let [index, item] of whereCondition.entries()) {
            if (whereCondition.length > 1) {
                const clause = index == 0 ? ` WHERE` : ` AND`;
                customQuery = customQuery.concat(`${clause} ${Object.keys(item)[0]}='${Object.values(item)[0]}'`);
            }
            else
                customQuery = customQuery.concat(` WHERE ${Object.keys(item)[0]}='${Object.values(item)[0]}'`);
        }
    }
    if (orderByColumn.length > 0) {
        for (let [index, item] of orderByColumn.entries()) {
            if (orderByColumn.length > 1) {
                const clause = index == 0 ? ` ORDER BY` : ',';
                customQuery = customQuery.concat(`${clause} ${Object.keys(item)[0]}`);
            }
            else
                customQuery = customQuery.concat(` ORDER BY ${Object.keys(item)[0]}`);
        }
        const orderBy = mode.length > 0 ? mode[0] : ``;
        customQuery = customQuery.concat(` ${orderBy}`);
    }
    return customQuery.trim()
}

module.exports = {
    sqlQueryBuilder, sqlUpperCase
}
