const buyproduct= async(req,res)=>{
    try{
        const productID=req.params.id;
        buyService(productID);
    }
    catch(error){
        console.error("Error in buyproduct",error);
        res.status(500).json({message:"internal server error"});
    }
}