
GetDeviceInfo(1);

var a = 1;



function GetDeviceInfo1(deviceID) {

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
            .then(() => client.query("insert into DailyMeasures values (1, 'P', '2020/03/04 10:10:10', 145)"))
            .then(results => console.table(results.rows))
            .catch(e => console.log(e))
            .finally(() => client.end)

    }
    catch (err) {
        console.log("Erro:" + err);
    }

};



function GetDeviceInfo(deviceID) {

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
            .then(() => client.query("SELECT DeviceID from DailyMeasures where deviceid=1"))
            .then(results => console.table(results.rows))
            .catch(e => console.log(e))
            .finally(() => client.end)

    }
    catch (err) {
        console.log("Erro:" + err);
    }

};



function Test() {

    document.getElementById("demo").innerHTML ="OLA";
};

