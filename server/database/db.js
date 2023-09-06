import mongoose from "mongoose";


 const Connection=async(username,password)=>{
   // const URL=`mongodb://${username}:${password}@ac-cgb5gfx-shard-00-00.3nlgikf.mongodb.net:27017,ac-cgb5gfx-shard-00-01.3nlgikf.mongodb.net:27017,ac-cgb5gfx-shard-00-02.3nlgikf.mongodb.net:27017/?ssl=true&replicaSet=atlas-nsm6b0-shard-0&authSource=admin&retryWrites=true&w=majority`;
    const URL=`mongodb://${username}:${password}@ac-cgb5gfx-shard-00-00.3nlgikf.mongodb.net:27017,ac-cgb5gfx-shard-00-01.3nlgikf.mongodb.net:27017,ac-cgb5gfx-shard-00-02.3nlgikf.mongodb.net:27017/?ssl=true&replicaSet=atlas-nsm6b0-shard-0&authSource=admin&retryWrites=true&w=majority`;
try {
   await mongoose.connect(URL,{useNewUrlParser: true});
   console.log('Database connected successfully');
} catch (error){
    console.log('some error occured',error);

}
};
 
export default Connection;   