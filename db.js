const Pool = require('pg').Pool

const pool = new Pool({
    user: 'ddowamjxoslbaa',
    password: '6adf70b8eeb8dd91421b973ed8a7a0b1736e25bbf70726b6e1430785e57468f1',
    host:'ec2-34-247-172-149.eu-west-1.compute.amazonaws.com',
    port: 5432,
    database: 'dftbep6tp2760q',
    ssl: {rejectUnauthorized: false}
})

module.exports = pool
