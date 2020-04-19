const { Pool, Client } = require('pg');
//const connectionString = 'postgres://jfpuzkuuepiekn:00c53f5447e2535edddc4904dca5748b6281805d276d3f787795a7b637c66407@ec2-54-247-169-129.eu-west-1.compute.amazonaws.com:5432/d3f5aj8lj771iu';

const client = new Client({
    //connectionString:connectionString
    user: "jfpuzkuuepiekn",
    password: "00c53f5447e2535edddc4904dca5748b6281805d276d3f787795a7b637c66407",
    database: "d3f5aj8lj771iu",
    port: 5432,
    host: "ec2-54-247-169-129.eu-west-1.compute.amazonaws.com",
    ssl: true
})
client.connect();
client.query('SELECT * from NT', (err, res) => {
    console.log(err, res);
    client.end();
});



//var Connection = require('tedious').Connection;
//var config = {
//    server: 'localhost',
   
//    authentication: {
//        type: 'ntlm',
        
//        options: {
//            userName: 'vt_advania_dth', // "' + $env:username + '",
//            password: 'dILJAERBEST31',
//            domain: 'FB223',

//        }
//    },
//    options: {
//        database: 'trophyIndex',
//        instanceName: 'SQLEXPRESS01',
//        //rowCollectionOnDone: true,
//        //useColumnNames: false
//        trustServerCertificate: true,
//    }
//}
//var connection = new Connection(config);
//connection.on('connect', function (err) {
//    if (err) {
//        console.log(err);
//    } else {
//        console.log('Connected');
//    }
//});
//module.exports = connection;