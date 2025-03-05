const dbConfig = require('./dbConfig');
const mariadb = require('mariadb/callback');

const pool = mariadb.createPool(dbConfig);

const getAddr = (request, response) => {
    const searchQuery = request.query.q;

    if (!searchQuery) {
        return response.status(400).send("q parameter is missing");
    }

    const requestQuery = "%" + searchQuery + "%";
    const sqlQuery = `
        SELECT addrnum, fulladdr, withinname, zone, parcelid 
        FROM addresses 
        WHERE fulladdr LIKE ?
        LIMIT 10;
    `;

    pool.getConnection((err, connection) => {
        if (err) {
            console.error("Error getting connection:", err);
            return response.status(500).json({ error: "Database connection error" });
        }

        connection.query(sqlQuery, [requestQuery], (err, results) => {
            connection.release();

            if (err) {
                console.error("Error executing query:", err);
                return response.status(500).json({ error: "Database query error" });
            }

            response.status(200).json(results); // Results are already in JSON-friendly format
        });
    });
};

// code used with PostgreSQL
// const getAddr = (request, response) => {
//     requestQuery = "%" + request.query.q + "%"
//     sqlQuery = 'SELECT addrnum, fulladdr, withinname, zone, parcelid FROM addresses WHERE fulladdr ILIKE $1 LIMIT 10'
//     pool.query('SELECT addrnum, fulladdr, withinname, zone, parcelid FROM addresses WHERE fulladdr ILIKE $1 LIMIT 10', [requestQuery], 
//     (err, results) => {
//       if (err) {
//         throw err
//       }
//       response.status(200).json(results.rows)
//     })
//   }

  
module.exports = {getAddr}