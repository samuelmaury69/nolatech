const { encrypt, compare } = require('./handleBcryp')
const { Router } = require('express')
const router = Router();
const db = require('./settings')

router.post('/login', async (req, res) => {
    const sql = "SELECT * FROM user WHERE (username=? OR email=?) and password=?"
    const encryptPass = await encrypt(req.body.password)
    db.query(sql, [req.body.email, req.body.email, encryptPass], (err, data) => {
        if (err) {
            return res.json(err)
        }
        if (data.length > 0) {
            return res.json(data)
        } else {
            return res.json('login faild')
        }

    })
})
router.get('/api/v1/users', (req, res) => {
    const page = req.query.page ? parseInt(req.query.page) : 1;
    const count = req.query.count ? parseInt(req.query.count) : 10;
    const startIndex = (page - 1) * count;
    const endIndex = startIndex + count;

    const sql = "SELECT * FROM user LIMIT ?, ?";
    db.query(sql, [startIndex, count], (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error al obtener la lista de usuarios' });
        }

        getTotalUsers((err, totalUsers) => {
            if (err) {
                return res.status(500).json({ error: 'Error al obtener el total de usuarios' });
            }

            const totalPages = Math.ceil(totalUsers / count);

            res.json({
                users: data,
                currentPage: page,
                totalPages: totalPages
            });
        });
    });
});

function getTotalUsers(callback) {
    const sql = "SELECT COUNT(*) as total FROM user";
    db.query(sql, (err, data) => {
        if (err) {
            callback(err);
        } else {
            callback(null, data[0].total);
        }
    });
};


router.post('/register', async (req, res) => {
    const { username, email, password, phone, name } = req.body;
    const encryptedPassword = await encrypt(password);
    const sql_1 = "SELECT email FROM user WHERE email=?";
    db.query(sql_1, [email], (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error al insertar el usuario' });
        }
        if (data.length > 0) {
            return res.status(201).json({ message: 'Usuaro ya existente' });
        } else {
            insert()
        }
    });
    function insert() {
        const sql = "INSERT INTO user (username, email, password, phone, name) VALUES (?, ?, ?, ?, ?)";
        db.query(sql, [username, email, encryptedPassword, phone, name], (err, data) => {
            if (err) {
                return res.status(500).json({ error: 'Error al insertar el usuario' });
            }
            return res.status(200).json({ message: 'Usuario registrado exitosamente' });
        });
    }

});

router.post('/api/v1/users/:id', async (req, res) => {
    const { id } = req.params;
    const { username, phone, name, email } = req.body;
    const sql = "UPDATE `user` SET `username` = ?, `phone` = ?, `name` = ?, `email` = ? WHERE `user`.`id` = ?";
    db.query(sql, [username, phone, name, email, id], (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error al actualizar el usuario', details: err });
        }
        return res.json({ message: 'Usuario actualizado con éxito' });
    });
});

router.delete('/api/v1/users/:id', async (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM `user` WHERE `id` = ?";
    db.query(sql, [id], (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error al actualizar el usuario', details: err });
        }
        return res.json({ message: 'Usuario eliminado con éxito' });
    });
});

module.exports = router;