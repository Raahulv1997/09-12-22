// import express from 'express';
// import cors from 'cors'

// import multer from "multer";
// import path from 'path'
// import {fileURLToPath} from 'url'
// import { getFile, saveFile } from './src/Controllers/ImageController.js';
// import { DbConfigs } from './src/Configs/DbConfigs.js';
// const __filename=fileURLToPath(import.meta.url);
// const __dirname= path.dirname(__filename);
// const app= express();

// DbConfigs();
// app.use(cors())
// app.use(express.json())
//  const storage=multer.diskStorage({
//    destination:function(req, file, cb){
//     cb(null, 'images/')
//    },
//    filename:function(req,file,cb){
//       const ext= path.extname(file.originalname)
//     const name=Date.now();
//     cb(null, name+ ext)
//    }
//  })
 
//   const upload= multer({storage:storage })
                     
//      app.post('/upload',upload.single('avatar'),saveFile)   
//      app.get('/upload',getFile)            

                        
  








// app.listen(2000,()=>{
//     console.log('server is running at 1000')
// })

