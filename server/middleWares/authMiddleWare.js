import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { user } from "../model/user.js";

dotenv.config();

export const auth = async (req, res, next) => {
    const token = req.cookies.token;
    console.log("AUTH TOKEN: ",token);

    try {
        if (!token) {
            return res.json({ message: "Access Denied. Need to Login." });
        }

        const secretKey = process.env.JWT_SECRET;

        // ✅ Synchronously verify token
        const decoded = jwt.verify(token, secretKey);
        console.log("DECODED VALUE: ",decoded)

        // ✅ Check if user still exists
        const validUser = await user.findOne({ email: decoded.userEmail });
        console.log("valid user: ",validUser)
        if (!validUser) {
            return res.json({ message: "User no longer exists" });
        }

        // ✅ Attach user to request
        req.user = decoded;
        next();

    } catch (err) {
        return res.json({ message: "Invalid or expired token" });
    }
};
