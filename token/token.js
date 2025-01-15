 /////////////////////// verify access token

 const jwt = require("jsonwebtoken");

 const verifyAccessToken = (req, res, next) => {
   const token = req.cookies.accessToken;
 
   if (!token) {
     return res.status(401).json({
       message: "Access token not found. Please login.",
     });
   }
 
   jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
     if (err) {
       return res.status(403).json({
         message: "Invalid or expired access token. Please refresh your session.",
       });
     }
 
     req.user = decoded; // decoded token data: { email, role, id }
     next();
   });
 };
 
 module.exports = verifyAccessToken;
 
 /////////////////////////// verify refresh token
 
 const refreshAccessToken = (req, res, next) => {
   const refreshToken = req.cookies.refreshToken;
 
   if (!refreshToken) {
     return res.status(401).json({
       message: "Refresh token not found. Please login again.",
     });
   }
 
   jwt.verify(refreshToken, process.env.REFRESH_SECRET_KEY, (err, decoded) => {
     if (err) {
       return res.status(403).json({
         message: "Invalid or expired refresh token. Please login again.",
       });
     }
 
     // Generate new access token
     const accessToken = jwt.sign(
       { email: decoded.email, role: decoded.role, id: decoded.id },
       process.env.SECRET_KEY,
       { expiresIn: process.env.JWT_ACCESS_EXPIRY }
     );
 
     res.cookie("accessToken", accessToken, { httpOnly: true, maxAge: 15 * 60 * 1000 });
 
     req.user = decoded; // decoded token data: { email, role, id }
     next();
   });
 };
 
 module.exports = refreshAccessToken;

 
 //----------------------------------------

 const AuthSchema = require("../schemas/auth.schema");
 const nodemailer = require("nodemailer");
 const bcrypt = require("bcryptjs");
 const jwt = require("jsonwebtoken");
 
 require("dotenv").config();
 
 // Helper functions
 const generateAccessToken = (payload) => {
   return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: process.env.JWT_ACCESS_EXPIRY });
 };
 
 const generateRefreshToken = (payload) => {
   return jwt.sign(payload, process.env.REFRESH_SECRET_KEY, { expiresIn: process.env.JWT_REFRESH_EXPIRY });
 };
 
 const register = async (req, res, next) => {
   try {
     const { username, email, password } = req.body;
 
     const foundedUser = await AuthSchema.findOne({ email: email });
 
     if (foundedUser) {
       return res.json({
         message: "User already exists",
       });
     }
 
     const transporter = nodemailer.createTransport({
       service: "gmail",
       auth: {
         user: process.env.USER_EMAIL,
         pass: process.env.USER_GOOGLE_PASS_KEY,
       },
     });
 
     const randomNumber = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10)).join("").trim();
 
     const sendEmail = {
       from: process.env.USER_EMAIL,
       to: email,
       subject: "Verification code of devbook",
       html: `<p>tasdiqlash kodi: <b style="color: blue; font-size: 40px;">${randomNumber}</b></p>`,
     };
 
     await transporter.sendMail(sendEmail);
 
     const hash = await bcrypt.hash(password, 12);
 
     const userRegister = await AuthSchema.create({ username, email, password: hash, verify_code: randomNumber });
 
     setTimeout(async () => {
       await AuthSchema.findByIdAndUpdate(userRegister._id, { verify_code: "" });
     }, 60 * 1000);
 
     res.json({
       message: "Registered. Please verify your email.",
     });
   } catch (error) {
     next(error);
   }
 };
 
 const verify = async (req, res, next) => {
   try {
     const { email, verify_code_by_client } = req.body;
 
     const foundedUser = await AuthSchema.findOne({ email: email });
 
     if (!foundedUser) {
       return res.json({
         message: "User not found",
       });
     }
 
     if (foundedUser.verify_code === verify_code_by_client) {
       await AuthSchema.findByIdAndUpdate(foundedUser._id, { verify: true, verify_code: "" });
 
       res.json({
         message: "Successfully verified",
       });
     } else {
       res.json({
         message: "Verify code mistake or not exists",
       });
     }
   } catch (error) {
     next(error);
   }
 };
 
 const login = async (req, res, next) => {
   try {
     const { email, password } = req.body;
 
     const foundedUser = await AuthSchema.findOne({ email: email });
 
     if (!foundedUser) {
       return res.json({
         message: "User not found",
       });
     }
 
     const checkerPassword = await bcrypt.compare(password, foundedUser.password);
 
     if (!checkerPassword) {
       return res.json({
         message: "Invalid password",
       });
     }
 
     if (foundedUser.verify === true) {
       const accessToken = generateAccessToken({ email: foundedUser.email, role: foundedUser.role, id: foundedUser._id });
       const refreshToken = generateRefreshToken({ email: foundedUser.email, role: foundedUser.role, id: foundedUser._id });
 
       // Set tokens in cookies
       res.cookie("accessToken", accessToken, { httpOnly: true, maxAge: 15 * 60 * 1000 });
       res.cookie("refreshToken", refreshToken, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 });
 
       res.json({
         message: "Successfully logged in",
       });
     } else {
       res.json({
         message: "You were not verified",
       });
     }
   } catch (error) {
     next(error);
   }
 };
 
 module.exports = {
   register,
   verify,
   login,
 };
 