const controller = {};
const title = 'Home';

controller.index = async (req, res) => {
    res.render('user/home', { title });
}