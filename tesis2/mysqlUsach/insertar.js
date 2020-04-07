var mysql  = require('mysql');
var dbconn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'ingedesa',
  database : 'dbUsach'
});

dbconn.connect(function(err){
  if(err){
    console.log('Database connection error');
  }else{
    console.log('Database connection successful');
  }
});


var record= { nombre: 'Alexander', apellido: 'Bell', email: 'bell@datex.com' };

dbconn.query('INSERT INTO alumnos SET ?', record, function(err,res){
  if(err) throw err;

  console.log('Last record insert id:', res.insertId);
});

dbconn.end(function(err) {
  // Function to close database connection
});