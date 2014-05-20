var mongoose = require('mongoose');
var crypto = require('crypto');

var Schema   = mongoose.Schema;

var User = new Schema({
    "id" : Number,
    "sessionId" : String,
    "userId" : {type : String, index : true},
    "passwd" : String,
    "login_at" :Date,
    "created_at" : Date
});

var League = new Schema({
    'seq' : Number,
    'users' : Array,
    'created_at' : Date
});

var Room = new Schema({
    'seq' : Number,
    'users' : Array,
    'created_at' : Date,
    'is_playing' : Boolean
});

mongoose.model('User', User);
mongoose.model('League', League);
mongoose.model('Room', Room);


User.method.pre('save', function(){
   
    console.log(document);
    
    next();
});

mongoose.connect('mongodb://localhost/tetrisJS');