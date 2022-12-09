import express from 'express'
import { getFile, saveFile } from '../Controllers/ImageController.js';
import upload from '../Middleware/imageMiddleware.js';

 const imageUpload= express.Router();
 imageUpload.post('/upload',upload.single('avatar'),saveFile)
 imageUpload.get('/upload',getFile)

 export default imageUpload;



 // user_route.post('/register',upload.single('image'), userController.insertUser)