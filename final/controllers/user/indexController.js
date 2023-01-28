const controller = {}
const Title = 'Robotics & IoT HCMUS'

controller.showHome = async (req, res) => {
    // show home page
    res.render('user/home', { title: Title })
}

module.exports = controller