import { User } from "../models/userModels.js";
import bcrypt from "brcypt";


export const registration= async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        if(!name||!email||!password){
            res.status(400).json({message:"fill the required fields"});
        }
        const user=await UserfindOne({email})
        if(user){
            res.status(400).json({message:"email already registered"});
        }
        const hashed=await bcrypt.hashedPassword(password,10)
        await User.create({
            name,
            email,
            password:hashed
        })
        return res.status(201).json({message:"account created succesfully"})
        
    } catch (error) {
        res.status(500).json({message:"failed to register"})
        console.log(error);
        
    }

}


    

  



