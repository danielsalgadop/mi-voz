const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();



module.exports.stablishConnection = () => {
console.log('tieasdfd')
}
// module.exports.stablishConnection = stablishConnection;

// let stablishConnection = () => {
//     var connection = mysql.createConnection({
//         host: process.env.DB_HOST,
//         user: process.env.DB_USER,
//         password: process.env.DB_PASSWORD,
//         database: process.env.DB_DATABASE
//     });
//     connection.connect((error)=>{
//         if(error){
//             console.log('error')
//         }
//     });
    // return new Promise((resolve,reject)=>{

    //     const connection = mysql.createConnection({
    //         host: process.env.DB_HOST,
    //         user: process.env.DB_USER,
    //         password: process.env.DB_PASSWORD,
    //         database: process.env.DB_DATABASE
    //     });
    //     connection.connect((err) => {
    //         if(err) {
    //             reject(err)
    //         }
    //         resolve(connection)
    //     });

    // })
// }

// module.exports.close = (connection) => {
    // connection.destroy();
// }