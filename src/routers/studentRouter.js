const router = require('express').Router();
const sequelize = require('../database');

router.post('/', async (req, res) => {
    const {type, value} = req.body.params;

    if(type == 'all'){
        try{
            const students = await sequelize.query(`SELECT * FROM "Students";`);

            res.send(students[1].rows).status(200);
        }
        catch(err){
            throw new Error(err);
        }
    } else {
        try {
            const student = await sequelize.query(`
                SELECT * FROM "Students" WHERE ${type} = '${value}';
            `);

            if(student[1].rowCount == 0){
                res.sendStatus(400);
            }
            res.send(student[1].rows);
        }
        catch(err) {
            throw new Error(err);
        }
        
    }
});

module.exports = router;