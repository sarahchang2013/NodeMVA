
/*
 * GET home page.
 */
//A function called index is defined and called when '/' is requested
//see the app.get() in app.js
exports.index = function (req, res) {
    res.render('index', { title: 'Express' });
};