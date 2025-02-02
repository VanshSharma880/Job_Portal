import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import { User } from "../models/userSchema.js";
import ErrorHandler from "../middlewares/error.js";
import jwt from "jsonwebtoken";  // Added jwt import for token generation
import { sendToken } from "../utils/jwtToken.js";

// User registration
export const register = catchAsyncErrors(async (req, res, next) => {
  const { name, email, phone, password, role } = req.body;
  if (!name || !email || !phone || !password || !role) {
    return next(new ErrorHandler("Please fill in the full form!"));
  }
  
  const isEmail = await User.findOne({ email });
  if (isEmail) {
    return next(new ErrorHandler("Email already registered!"));
  }

  const user = await User.create({
    name,
    email,
    phone,
    password,
    role,
  });

  // Send token and respond
  sendToken(user, 201, res, "User Registered!");
});

// User login
export const login = catchAsyncErrors(async (req, res, next) => {
  const { email, password, role } = req.body;

  if (!email || !password || !role) {
    return next(new ErrorHandler("Please provide email, password, and role"));
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid Email Or Password.", 400));
  }

  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Email Or Password.", 400));
  }

  if (user.role !== role) {
    return next(new ErrorHandler(`User with provided email and role not found!`, 404));
  }

  // Generate JWT Token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE,
  });

  // Set cookie with token
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",  // Only true in production
    sameSite: "None",  // Allows cross-origin requests
    maxAge: 1000 * 60 * 60 * 24 * 7,  // Cookie expiration time (7 days)
  });

  // Send success response with token and user data
  res.status(200).json({
    success: true,
    message: "User Logged In!",
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
});

// User logout
export const logout = catchAsyncErrors(async (req, res, next) => {
  res
    .status(201)
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(Date.now()),  // Expiring the token cookie immediately
      secure: process.env.NODE_ENV === "production",  // true in production
      sameSite: "None",  // Cross-origin cookie
    })
    .json({
      success: true,
      message: "Logged Out Successfully.",
    });
});


// Get user details
export const getUser = catchAsyncErrors((req, res, next) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    user,
  });
});
