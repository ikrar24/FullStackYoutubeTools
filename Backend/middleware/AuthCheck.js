import dotenv from "dotenv"
import jwt from "jsonwebtoken"

dotenv.config();


const verifyCookie = (req, res, next) => {

try {
    
  const token = req.cookies.boostViewers;
  if (!token) return res.status(401).json({ message: "unauthorised User" });

  jwt.verify(token, process.env.TOKEN_SECRETE, (err, decoded) => {
    if (err) return res.json({ message: "Token expired" });
    next();
  });





} catch (error) {
    console.log(error);
    res.json({message:"internal Server error"})
    
}



};


export default verifyCookie;