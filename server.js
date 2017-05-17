var express = require('express'),
    restful = require('node-restful'),
    mongoose = require('mongoose');

var app = express();
//app.configure(function(){
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
//});

mongoose.connect('mongodb://localhost/restful');

var ProductSchema = mongoose.Schema({
    id : String,
    name: String,
    desciption: String
});

var Products = restful.model('products', ProductSchema);
Products.methods(['get', 'put', 'post', 'delete']);
Products.register(app, '/topics');

app.listen(3000);
console.log('Server is running at port 3000');


