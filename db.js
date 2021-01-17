
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',


  });
sequelize.authenticate().then(
    function() {
        console.log('Connected to Reizen');
    },
    function(err){
        console.log(err)
    }
);

User = sequelize.import('./models/user')
Trip = sequelize.import('./models/trips')

packingItems = sequelize.import('./models/packingItems')


User.hasMany(Trip)
Trip.belongsTo(User)
Trip.hasMany(packingItems)
packingItems.belongsTo(Trip)
module.exports = sequelize;