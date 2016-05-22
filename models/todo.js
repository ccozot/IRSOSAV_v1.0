var connection = require('../connection');

function Todo() {
  this.get = function(res) {
      connection.acquire(function(err, con) {
        con.query('select * from cliente', function(err, rows) {
          if (err) throw err;
          var empleados=[]; // Se crea un array vacio.
          var i;
          for (i = 0; i < rows.length; i++) {
           var empleado={}; // Se crea un objeto vacio.
           empleado.documento=rows[i].documento;
           empleado.id_tipo_doc=rows[i].id_tipo_doc;
           empleado.id_empresa=rows[i].id_empresa;
           empleado.id_ciudad=rows[i].id_ciudad;
           empleado.id_provincia=rows[i].id_provincia;
           empleado.id_pais=rows[i].id_pais;
           empleado.id_perfil=rows[i].id_perfil;
           empleado.descripcion=rows[i].descripcion;
           empleado.domicilio=rows[i].domicilio;
           empleado.telefono=rows[i].telefono;
           empleado.celular=rows[i].celular;
           empleado.mail=rows[i].mail;
           empleado.genero=rows[i].genero;
           empleado.clave=rows[i].clave;
           empleados.push(empleado);
          }
          con.release();
          res.jsonp(empleados);
          console.log('Esta vacio');
        });
      });
    };

  this.getid = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('select * from cliente where documento = ?', [id], function(err, rows) {
        if (err) throw err;
        var empleados=[]; // Se crea un array vacio.
        for (var i = 0; i < rows.length; i++) {
          var empleado={}; // Se crea un objeto vacio.
          empleado.documento=rows[i].documento;
          empleado.id_tipo_doc=rows[i].id_tipo_doc;
          empleado.id_empresa=rows[i].id_empresa;
          empleado.id_ciudad=rows[i].id_ciudad;
          empleado.id_provincia=rows[i].id_provincia;
          empleado.id_pais=rows[i].id_pais;
          empleado.id_perfil=rows[i].id_perfil;
          empleado.descripcion=rows[i].descripcion;
          empleado.domicilio=rows[i].domicilio;
          empleado.telefono=rows[i].telefono;
          empleado.celular=rows[i].celular;
          empleado.mail=rows[i].mail;
          empleado.genero=rows[i].genero;
          empleado.clave=rows[i].clave;
          empleados.push(empleado);
        }
        con.release();
        res.jsonp(empleados);
        console.log('Especificaron DNI');
      });
    });
  };

  this.gettid = function(id, res) {
      var test=[];
      var texto={};
      texto.id = ""+[id];
      texto.content = "Hola mundo";
      test.push(texto);
      res.jsonp(test);
      console.log('Especificaron ID en test');
  };

  this.create = function(todo, res) {
    connection.acquire(function(err, con) {
      con.query('insert into cliente set ?', todo, function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'IRSOSAV creacion fallida'});
        } else {
          res.send({status: 0, message: 'IRSOSAV creacion exitosa'});
        }
      });
    });
  };

  this.update = function(todo, res) {
    connection.acquire(function(err, con) {
      con.query('update cliente set ? where id = ?', [todo, todo.id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'IRSOSAV creacion fallida'});
        } else {
          res.send({status: 0, message: 'IRSOSAV creacion exitosa'});
        }
      });
    });
  };

  this.delete = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('delete from cliente where id = ?', [id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'IRSOSAV creacion fallida'});
        } else {
          res.send({status: 0, message: 'IRSOSAV creacion exitosa'});
        }
      });
    });
   };
}

module.exports = new Todo();
