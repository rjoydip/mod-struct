const App = require('@core/app');

class Routes extends App {
    constructor() {
        super()
        this.router.get('', (req, res, next) => { 
            res.render("users/views/users", {
                user: 'World'
            });
            next();
        });
        return this.router;
    }
}

module.exports = new Routes();