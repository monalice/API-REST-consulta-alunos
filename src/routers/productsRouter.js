const router = require('express').Router();
const sequelize = require('../database');

router.get('/', async (req, res) => {
    const {type, value} = req.body;

    if(type !== 'all'){
        try {
            const student = await sequelize.query(`
                SELECT (name, email, cpf) FROM "Students" WHERE ${type} = '${value}';
            `);

            if(student[1].rowCount == 0){
                res.sendStatus(400);
            }
            res.send(student[1].rows);
        }
        catch(err) {
            res.sendStatus(500);
            throw err;
        }
    } else {
        try{
            const students = await sequelize.query(`SELECT (name, email, cpf) FROM "Students";`);

            res.send(students[1].rows).status(200);
        }
        catch(err){
            res.sendStatus(500);
            throw err;
        }
        
    }
});

module.exports = router;