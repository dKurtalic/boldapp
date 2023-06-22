const express = require('express')
const router = express.Router();
const User = require('./models/User')
const { createUser, getAllUsers, getUser, deleteUser, updateUser, loginUser } = require('./controllers/userController')
const { createStartup, deleteStartup, updateStartup, getAllStartups, getStartup, getStartupDetails, getJobAtStartup } = require('./controllers/startupController')
const { getApplicationsFromUser, createApplication, deleteApplication, updateApplication, getAllApplications, getApplication } = require('./controllers/applicationController')



router.get('/', (req, res) => {
    res.json({ mssg: 'evoo pocetak' });
})
router.get('/signin', (req, res) => {
    res.json({ mssg: 'signin' });
})
router.post('/users/register', createUser)
router.post('/users/login', loginUser)
router.get('/users', getAllUsers);
router.get('/user/:id', getUser)
router.delete('/user/:id', deleteUser)
router.patch('/user/:id', updateUser)

router.post('/startup/create', createStartup)
router.get('/startups', getAllStartups)
router.get('/startup/:id', getStartup)
router.delete('/startup/:id', deleteStartup)
router.patch('/startup/:id', updateStartup)


router.post('/application/create', createApplication)
router.get('/applications', getAllApplications);
router.get('/application/:id', getApplication)
router.get('/applications/:userId', getApplicationsFromUser)
router.delete('/application/:id', deleteApplication)
router.patch('/application/:id', updateApplication)

router.get('/startupDetails/:startupName', getStartupDetails);
router.get('/startupDetails/:startupName/:jobTitle', getJobAtStartup)

module.exports = router