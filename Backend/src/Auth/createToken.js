import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config();

export const createToken = (req , res)=>{


    try {
        


const token = jwt.sign({check:"ok"} , process.env.TOKEN_SECRETE, {expiresIn:"2d"} );


res.cookie("boostViewers" , token , {
    httpOnly:true,
    secure:false, // reminder for true
    maxAge: 2 * 24 * 60 * 60 * 1000, // 2 days
} )

res.status(201).json({message:"Token stored in cookies"})



    } catch (error) {
        console.log(error);
        res.json({message:"Internal server error"})
        
    }


}