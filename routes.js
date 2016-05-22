var todo = require('./models/todo');

module.exports = {
  configure: function(app) {
    app.get('/todo/', function(req, res) {
      todo.get(res);
    });

    app.get('/todo/:id/', function(req, res) {
      todo.getid(req.params.id, res);
      //var test=[];
      //var texto={};
      //texto.id = ""+req.params.uid;
      //texto.content = "Hola mundo";
      //test.push(texto);
      //res.jsonp(test);
    });
    
    app.get('/test/:id/', function(req, res) {
      todo.gettid(req.params.id, res);
    });

    app.post('/todo/', function(req, res) {
      todo.create(req.body, res);
    });

    app.put('/todo/', function(req, res) {
      todo.update(req.body, res);
    });

    app.delete('/todo/:id/', function(req, res) {
      todo.delete(req.params.id, res);
    });
  }
};
