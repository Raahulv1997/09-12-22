import express from 'express'
import 'dotenv/config'
import { DbConfigs } from './src/Configs/DbConfigs.js';
import userRouter from './src/Routers/UserRouter.js';
import multer from "multer";
import path from 'path'
import {fileURLToPath} from 'url'
import cors from 'cors'
import imageUpload from './src/Routers/ImageRouter.js';
import { deleteFile, getFile, saveFile } from './src/Controllers/ImageController.js';




const __filename=fileURLToPath(import.meta.url);
const __dirname= path.dirname(__filename);


const app=express();
app.use(express.json())
app.use(cors())
app.use(express.static('images'))
DbConfigs();
app.use(userRouter)
app.use(imageUpload)


const storage=multer.diskStorage({
    destination:function(req, file, cb){
    
    },
    filename:function(req,file,cb){
       const ext= path.extname(file.originalname)
       console.log("ext----"+ext)
     const name=Date.now();
     console.log("name-----"+name)
     cb(null, name+ ext)
    }
  })
  
   const upload= multer({storage:storage })


                      
      app.post('/upload',upload.single('avatar'),saveFile)   
      app.get('/upload',getFile)            
      app.delete('/upload/:id',deleteFile)            
 

app.listen(process.env.SERVER_PORT,()=>{
    console.log(`server is running at ${process.env.SERVER_PORT}`)
})



