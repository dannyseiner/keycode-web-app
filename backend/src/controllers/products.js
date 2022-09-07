import db from "./database"

export const getProductById = (req, res) => {
    db.query(`SELECT * FROM products WHERE product_id = ${req.params.id}`, (response) => {
        res.type('text');
        res.status(200);
        res.json(response);
    })
};

export const updateProductStatus = (req, res) => {
}

