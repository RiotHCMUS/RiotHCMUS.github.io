const express = require('express');
const app = express();
const ehbs = require('express-handlebars');
const paginateHelper = require('express-handlebars-paginate')

app.engine('hbs', ehbs.engine(
    {   
        extreme: 'hbs',
        defaultLayout: 'layout',
        layoutsDir: __dirname + '/views/layouts',
        partialsDir: __dirname + '/views/partials',
        helpers: {

        },
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
        }
    }
));

app.use(express.static('/final/public'));

let path = require('path');

app.set('view engine', 'hbs');

app.use('/', require('./routes/user/indexRoute'));

// // admin
// app.use('/admin', require('./routes/admin/loginRoute'));

// user
// app.use('/index', require('./routes/user/homeRoute'));

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log('Server is running on port 3000');
});




