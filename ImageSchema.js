import mongoose from "mongoose";

  const ImageSchema= new  mongoose.Schema({
    name:{type:String},
    avatar:{type:String }

})
 const ImageModel= mongoose.model('image', ImageSchema);
 export default ImageModel;