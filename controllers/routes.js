var Auth = require('./auth');
module.exports = (app) => {
    
    console.log("In routes");
    app.get('/', (req,res) => { 
        res.render('home.html');
    });

    app.get('/auth', Auth.render);         // login page
    // app.get('/logout', Auth.logout);        // logout route + redirect

    app.post('/auth', Auth.login);         // login form submission
    app.post('/register', Auth.register);   // register form submission

    app.all('/profile', Auth.middlewares.session);
    app.get('/profile', (req, res) => { 
        res.render('profile.html', req.session);
    });

// var thingCtrl = require('./thingCtrl');
//
// ──────────────────────────────────────────────────────────────────────────
//   :::::: T H I N G   R O U T E S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────
//

    // app.get('/api/things', thingCtrl.get) // get one
    // app.get('/api/things/:id', thingCtrl.get) // get many
    // app.post('/api/things', thingCtrl.upsert) // create
    // app.post('/api/things/:id', thingCtrl.upsert) // update
    
}