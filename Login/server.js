////1.
//var http = require('http');
//var fs = require('fs');

//var pg = require('pg');



//const { Pool, Client } = require("pg");

//const pool = new Pool({
//    user: "postgres",
//    host: "127.0.0.1",
//    database: "parentsdb",
//    password: "parents",
//    port: "5432"
//});

//pool.query("SELECT * from DailyMeasures", (err, res) => {
//    console.log("Erro: " + err, "Res: " + res);
//    ola = "ola alterado - pool";
//    pool.end();
//});


var ola = new String;
ola = "ola Inicial";
//const res = await pool.query("SELECT DeviceID from DailyMeasures where deviceid=1");
//await pool.end()
//var connectionString = "postgresql://postgres:parents@127.0.0.1:5432/parentsdb";
try {

    const { Client } = require('pg')
    const client = new Client({
        user: "postgres",
        host: "127.0.0.1",
        database: "postgres",
        password: "parents",
        port: "5432"
    })

    client.connect()
        .then(() => console.log("Connected Successfuly"))
        .then(() => client.query("insert into DailyMeasures values (1, 'P', '2020/03/04 10:10:10', 141)"))
        .then(() => client.query("SELECT DeviceID from DailyMeasures where deviceid=1"))
        .then(() => client.query("SELECT * from DailyMeasures"))
        .then(results => console.table(results.rows))
        .catch(e => console.log(e))
        .finally(() => client.end)

    //var pgClient = new pg.Client(connectionString);
    //pgClient.connect();



//pgClient.query('SELECT DeviceID from DailyMeasures where deviceid=1', (err, res) => {

//    if (err) {
//        console.log(err.stack)
//    } else {
//        console.log(res.rows[0])
//    }
//    ola = "ola alterado";
//    done();
//});



//pgClient.query('SELECT 1 + 4').then(res => {

//    const result = R.head(R.values(R.head(res.rows)));
//    ola = "ola alterado";
//    console.log(result);
//}).finally(() => client.end());

//console.log(result.fields[0].name) 

//2.
//var server = http.createServer(function (req, resp) {
//    //3.
//    resp.writeHead(200, { 'Content-Type': 'text/html' });
//    resp.write("A1<br>");
//    resp.write(ola);
//    //resp.write(result.fields[0].name);
//    resp.write("<br>A2");

//        //fs.readFile("login.html", function (error, pgResp) {
//        //    if (error) {
//        //        resp.writeHead(404);
//        //        resp.write('Contents you are looking are Not Found');
//        //    } else {
//        //        resp.writeHead(200, { 'Content-Type': 'text/html' });
//        //        resp.write(pgResp);
//        //        resp.write(ola);
//        //    }
//        //    resp.end();
//        //});

//});
////5.
    //server.listen(1337);

}
catch (err) {
    ola = "Erro:" + err;
}


console.log('Server Started listening on 1337');