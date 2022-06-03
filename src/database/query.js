module.exports = {
    product: {
        getAllProducts: 'SELECT * FROM product',
        createNewProducts: 'INSERT INTO product (name, description, price, category, id_discount, brand) VALUES (?,?,?,?,?,?)',
        getProductById: 'SELECT * FROM product WHERE id = ?',
        deleteProductById: 'DELETE FROM product WHERE id = ?',
        updateProduct: 'UPDATE product SET name = ?, description = ?, price = ?, category = ?, id_discount = ?, brand = ? WHERE id = ?'
    },
    register: {
        registerUser: 'INSERT INTO user (username,password,firstname,lastname,address,phone_number) VALUES (?,?,?,?,?,?)',
        userExists: 'SELECT * from user WHERE username = ? '
    },
    login: {
        loginUser: 'SELECT * FROM user WHERE username = ?'
    }
}