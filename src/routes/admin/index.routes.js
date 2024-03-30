const adminsRoutes = require('express').Router();
const userRoute = require('./admin.routes');
const cartRoutes = require('./cart.routes');
const productRoutes = require('./product.routes');

adminsRoutes.use('/product', productRoutes)
adminsRoutes.use('/admin', userRoute)
adminsRoutes.use('/cart', cartRoutes)
module.exports = adminsRoutes;