import express from 'express'
import { protect } from '../middlewire/authMiddlewire.js';
import { authUser,registerUser,logoutUser,getUserProfile,updateUserProfile } from '../controller/userController.js';
const router = express.Router();



router.post('/',registerUser)     // this is as like signup
router.post('/auth', authUser)   // login
router.post('/logout', logoutUser)
// router.get('/userProfile',getUserProfile)
// router.put('/updateUser',updateUserProfile)
// The above two lines can be replaced by the following one line as the main route is /profile. only the request types are different.
router.route('/profile')
      .get(protect, getUserProfile)
      .put(protect, updateUserProfile)


export default router;