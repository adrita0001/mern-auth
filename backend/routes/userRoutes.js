import express from 'express'
import { authUser,registerUser,logoutUser,getUserProfile,updateUserProfile } from '../controller/userController.js';
const router = express.Router();


router.post('/',registerUser)
router.post('/auth', authUser)
router.post('/logout', logoutUser)
// router.get('/userProfile',getUserProfile)
// router.put('/updateUser',updateUserProfile)
// The above two lines can be replaced by the following one line as the main route is /profile. only the request types are different.
router.route('/profile').get(getUserProfile).put(updateUserProfile)




export default router;