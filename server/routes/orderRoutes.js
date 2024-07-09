const express = require('express');
const { newOrder, getSingleOrderDetails, myOrders, getAllOrders } = require('../controllers/orderController');
const { isAuthenticated, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

// create new order 
router.route('/order/new').post(isAuthenticated, newOrder);

// get single order
router.route('/order/:id').get(isAuthenticated, getSingleOrderDetails);

// get my orders
router.route('/orders/me').get(isAuthenticated, myOrders);

// admin only access
router.route('/admin/orders').get(isAuthenticated, authorizeRoles("admin"), getAllOrders);

module.exports = router;