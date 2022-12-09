 import {StatusCodes} from 'http-status-codes'
import ImageModel from '../Models/ImageSchema.js'


 
 
 
 export async function saveFile(req ,res,next){
   
    try {
        if(req.file){
          const saveImage= new ImageModel({
            name:req.body.name,
            avatar:req.file.path})
        
           await saveImage.save();
           
          res.status(StatusCodes.OK).json({message:"file upload"})
        }
        else{
         res.status(StatusCodes.BAD_REQUEST).json({message:"Not upload file"})
        }
       
        
        
    
    } catch (error) {
       res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"Somthing went wrong"}) 
    }
   
    
}

 export async function getFile(req,res, next){
try {
  const getImage= await ImageModel.find()
  console.log(JSON.stringify(getImage))
   res.status(StatusCodes.OK).json(getImage)
} catch (error) {
   res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"Somthing went wrong"}) 
}
}


  export async function deleteFile(req, res){
   try {
      const deleteImage= await ImageModel.findByIdAndDelete(req.params.id)
      res.status(StatusCodes.NO_CONTENT).json(deleteImage)
   } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"Somthing went wrong"}) 
   }
}