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


dbconn.query('SELECT * FROM alumnos',function(err, records){
  if(err) throw err;

  console.log('Data received from Db:n');
  console.log(records);
});

dbconn.end(function(err) {
  // Function to close database connection
});