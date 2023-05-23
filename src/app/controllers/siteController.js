
class SiteController {

    // Home
    home(req, res) {
        res.render('home', {
            page: 'home'
        })
    }
}

module.exports = new SiteController