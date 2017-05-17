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

//mongoose.connect('mongodb://localhost/restful');

// var ProductSchema = mongoose.Schema({
//     id : String,
//     name: String,
//     desciption: String
// });

// var Products = restful.model('products', ProductSchema);
// Products.methods(['get', 'put', 'post', 'delete']);
// Products.register(app, '/topics');

app.get("/api/contacts", function(req, res) {
    res.status(200).json({"id":2});
});

//app.listen(3000);
app.set('port', (process.env.PORT || 8080));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


