const controller = {};
const title = 'Login Admin';

controller.index = async (req, res) => {
    res.render('admin/login', { title });
}

module.exports = controller;
