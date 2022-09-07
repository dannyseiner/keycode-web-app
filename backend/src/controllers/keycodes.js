import db from "./database"

export const getKeyCodeById = (req, res) => {
    db.query("SELECT * FROM kr-keys", (response) => {
        res.type('text');
        res.status(200);
        res.json(response);
    })
};
