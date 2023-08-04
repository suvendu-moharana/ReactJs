const mysql = require('mysql');

const con = mysql.createConnection({
    host: "db4free.net",
    user: "hellosuvendu",
    password: "hellosuvendu",
    database: "student_hrms"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM student", function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});