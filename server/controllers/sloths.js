const mongoose = require('mongoose');
var Sloth = mongoose.model('Sloth');

module.exports = {
    show: function(req, res){
        Sloth.find({}, null, {sort: '-createdAt'}, function(err, data){
            if(err){
                console.log(err);
            }
            else{
                res.render('index', {sloths: data});
            }
        })
    },

    create: function(req, res){
        var new_sloth = new Sloth({name: req.body.name, age: req.body.age, quote: req.body.quote});
        new_sloth.save(function(err){
            if(err){
                res.render('NewSlothForm', {errors: new_sloth.errors});
            }
            else{
                console.log('Successfully added a new Sloth!');
                res.redirect('/');
            }
        })
    },

    update: function(req, res){
        Sloth.update({_id: req.params.id}, {name: req.body.name, age: req.body.age, quote: req.body.quote}, function(err){
            if(err){
                console.log('Something went wrong when updating sloth', err);
                res.render('EditSlothForm');
            }
            else{
                console.log('Record updated');
                res.redirect('/');
            }
        })
    },

    delete: function(req, res){
        Sloth.remove({_id: req.params.id}, function(err){
            if(err){
                console.log('Could not delete this sloth');
            }
            else{
                res.redirect('/');
            }
        })
    },

    showOne: function(req, res){
        Sloth.find({_id: req.params.id}, function(err, data){
            if(err){
                console.log(err);
            }
            else{
                res.render('ShowSloth', {sloths: data});
            }
        })
    },

    updateForm: function(req, res){
        Sloth.find({_id: req.params.id}, function(err, data){
            if(err){
                console.log('Could not find this sloth');
            }
            else{
                res.render('EditSlothForm', {sloths: data});
            }
        })
    }
}