const dbConnection = require('../database/connection');
const queries = require('../database/query');
require('dotenv').config();

//Authentication
const jwt = require('jsonwebtoken');

const connection = dbConnection();

function generateAccessToken(username) {
    return jwt.sign(username, process.env.JWT, {
        expiresIn: 300,
    });
}

const login = {
    loginUser(req, res) {
        const { username, password } = req.body;
        
        connection.query(queries.login.loginUser,[username,password], (err,data) => {
            if(err) console.log(err);

            if(data.length > 0) {
                
                if(data[0].password == password) {
                    
                    const username = data[0]?.username;
                    
                    token = generateAccessToken({username: username});
                    
                    res.json({
                        auth: true,
                        token: token,
                        result: data
                    })
                } else {
                    res.send({auth: false, message: "Wrong username/password!"});
                }

            } else {
                res.send({auth: false, message: "User doesn't exist"});
            }
        });
    }
}

module.exports = login;