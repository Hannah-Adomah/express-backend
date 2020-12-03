const { Router } = require('express')
const router = Router()

const { 
    createUser,
    getUserDetails,
    updateUserDetails,
    deleteUserAccount
} = require('../controllers/userController')

// route for creating an acconut
router.post('/api/user/new',createUser)

//route for getting an account details
router.get('/api/user/username',getUserDetails)

//route for updating an account
router.put('/api/user/update',updateUserDetails)

//route for deleting an account
router.delete('/api/user/delete',deleteUserAccount)


module.exports = router