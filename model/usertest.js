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
    let customQuery=`select ${selectColumns} from ${table}`;
    if (whereCondition.length > 0) {
        let email=whereCondition[0].email;
        customQuery = customQuery+ ` where email='${email}'`;
    }
    return customQuery
}



module.exports = {
    helloWord, sum, getSqlQuery
}

