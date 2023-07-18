const bodyParser = require("body-parser");
const app = require("express")();

const mysql = require("mysql2");
const connection = mysql.createPool({
    host: "db4free.net",
    user: "sql12629996",
    password: "P6A7X3KXMe",
    database: "sql12629996",
    connectionLimit: 10,
});

app.use(bodyParser.json());

app.get("/api/order", (req, res) => {
    connection.query("SELECT * FROM orders", (error, results) => {
        if (error) {
            res.status(500).send({ error: error });
        } else {
            res.status(200).send({ data: results });
        }
    });
});

app.post("/api/order", (req, res) => {
    const sql = `INSERT INTO orders (sender_name, sender_mail, sender_phone, origin_city, origin_address, receiver_name, receiver_phone, destination_city, destination_address, goods_type, goods_count, goods_weight, goods_length, goods_width, goods_info) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;

    const values = [
        req.body.sender.name,
        req.body.sender.email,
        req.body.sender.phone,
        req.body.origin,
        req.body.sender.address,
        req.body.receiver.name,
        req.body.receiver.phone,
        req.body.destination,
        req.body.receiver.address,
        req.body.goods.type,
        req.body.goods.count,
        req.body.goods.weight,
        req.body.goods.length,
        req.body.goods.width,
        req.body.goods.info,
    ];

    connection.query(sql, values, (error, results) => {
        if (error) {
            res.status(500).send({ error: error });
        } else {
            res.status(200).send({ data: results });
        }
    });
});

module.exports = app;
