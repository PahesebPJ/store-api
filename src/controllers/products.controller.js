const dbConnection = require('../database/connection');
const queries = require('../database/query');

var connection = dbConnection();

connection.connect();

const product = {
    getProducts(req, res) {
        connection.query(queries.product.getAllProducts,(err,data) => {
            if(err) {
                console.log(err);
            }
            res.send(data);
        })
    },
    createNewProduct(req,res) {
        const {name, description, price, category, brand} = req.body;
        const {id_discount} = req.body;

        if(id_discount == null) id_discount = 1;
        
        if(name == null || description == null || price == null || category == null || id_discount == null || brand == null) {
            res.status(400).send({msg: 'Please fill all the fields'});
        }

        connection.query(queries.product.createNewProducts,[name, description, price, category, id_discount, brand],(err,data) => {
            if(err) {
                console.log(err);
            }
            res.send("Product created");
        });
    },
    getProductById(req,res) {
        const {id} = req.params;
        connection.query(queries.product.getProductById,[id],(err,data) => {
            if(err) {
                console.log(err);
            }
            res.send(data);
        });
    },
    deleteProductById(req,res) {
        const {id} = req.params;
        connection.query(queries.product.deleteProductById,[id],(err,data) => {
            if(err) {
                console.log(err);
            }
            res.send(data);
        })
    },
    updateProduct(req,res) {
        const {name, description, price, category, brand} = req.body;
        const {id_discount} = req.body;
        
        if(name == null || description == null || price == null || category == null || id_discount == null || brand == null) {
            res.status(400).send({msg: 'Please fill all the fields'});
        }

        connection.query(queries.product.updateProduct,[name, description, price, category, brand],(err, data) => {
            if(err) {
                console.log(err);
            }

            res.send('Data updated');
        })
    }
}



module.exports = product;