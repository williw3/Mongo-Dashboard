var sloths = require('../controllers/sloths.js');

module.exports = function(app){
    app.get('/', function(req, res){
        sloths.show(req, res)
    })
    
    app.get('/sloth/new', function(req, res){
        res.render('NewSlothForm');
    })
    
    app.get('/sloth/:id', function(req, res){
        sloths.showOne(req, res)
    })
    
    app.get('/sloth/edit/:id', function(req, res){
        sloths.updateForm(req, res)
    })
    
    app.get('/sloth/destroy/:id', function(req, res){
        sloths.delete(req, res)
    })
    
    app.post('/sloth', function(req, res){
        sloths.create(req, res)
    })
    
    app.post('/sloth/:id', function(req, res){
        sloths.update(req, res)
    })
}