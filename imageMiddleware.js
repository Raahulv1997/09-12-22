import multer from "multer";
import path from 'path'
import {fileURLToPath} from 'url'


const __filename=fileURLToPath(import.meta.url);
const __dirname= path.dirname(__filename);

 const storage=multer.diskStorage({
   destination:function(req, file, cb){
    cb(null, 'images/')
   },
   filename:function(req,file,cb){
      const ext= path.extname(file.originalname)
    const name=Date.now();
    cb(null, name+ ext)
   }
 })

  const upload= multer({storage:storage
                        // fileFilter:function(req, file, cb){
                        //    if( file.mimetype=='image/png'||file.mimetype=='image/jpg'){
                        //       cb(null, true)
                        //    }
                        //    else{
                        //       console.log("only jpg & png file are supported")
                        //       cb(null, false)
                        //    }
                          
                        // },
                        // limits:{fileSize:1024 * 1024 *2}
                     })
  
                        
  
  export default  upload;
 








