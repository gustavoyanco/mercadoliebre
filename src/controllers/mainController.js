const path = require ('path');

var mainController = {
    home: (req, res) => {
        res.render('home',);
    },
    login: (req, res) => {
        res.render('login');
    },
    register: (req, res) => {
        res.render('register');
    },
}
module.exports = mainController;
