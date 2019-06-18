const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
//   let a = 2437;
//   let b = 875;
//   const algo = (x, y) => {
//     if (x == y) {
//         return y;
//     }
//     x = x > y ? x - y : x;
//     y = y > x ? y - x : y;
//     return algo(x , y);
// }

//console.log("Answer would be : " + algo(a, b));
 
res.render('index', { title: 'HRO' });
});

module.exports = router;
