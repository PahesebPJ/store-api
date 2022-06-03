const dbConnection = require('../database/connection');
const queries = require('../database/query');

var connection = dbConnection();

connection.connect();

const register = {
    registerUser(req,res) {
        const { username , password, firstname, lastname, address, phone_number } = req.body;

        connection.query(queries.register.userExists,[username],(err,data) => {
            //Validate if the username is already taken
            if(data.length > 0) {
                res.status(203).json({
                    message: "Username already taken"
                })
            } else {
                connection.query(queries.register.registerUser,[username , password, firstname, lastname, address, phone_number],(err,data) => {
                    if(err) console.log(err);
        
                    res.json({
                        message: "User registered successfully"
                    })
                });
            }
        })

        
    }
}

module.exports = register;