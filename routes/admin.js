const route = require('express').Router()
const adminController = require('../controllers/adminController')
const middlewares = require('../middlewares')

route.get('/administrator', middlewares.verifyToken, middlewares.isAdminCheck, adminController.getUser)
route.get('/administrator/get/role', middlewares.verifyToken, middlewares.isAdminCheck, adminController.getUserRole)
route.get('/administrator/get/:unique_id', middlewares.verifyToken, middlewares.isAdminCheck, adminController.getUserByUniqueId)
route.delete('/administrator/:unique_id', middlewares.verifyToken, middlewares.isAdminCheck, adminController.deleteUserByUniqueId)
route.delete('/administrator/:id', middlewares.verifyToken, middlewares.isAdminCheck, adminController.deleteUserById)

module.exports = route
