import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateTokenAndSetCookie.js";

const signupUser = async (req, res) => {
  try {
    const { name, phone, username, password, bio } = req.body;
    const user = await User.findOne({ $or: [{ phone }, { username }] });

    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      username,
      phone,
      password: hashedPassword,
      bio,
    });
    await newUser.save();

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);

      res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        phone: newUser.phone,
        username: newUser.username,
        bio: newUser.bio,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("Error in signupUser: ", err.message);
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password, phone } = req.body;
    const user = await User.findOne({ $or: [{ phone }, { username }] });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect)
      return res
        .status(400)
        .json({ error: "Invalid username or phone or password" });

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      username: user.username,
      phone: user.phone,
      bio: user.bio,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error in loginUser: ", error.message);
  }
};

const logoutUser = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 1 });
    res.status(200).json({ message: "User logged out successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("Error in logoutUser: ", err.message);
  }
};

export { signupUser, loginUser, logoutUser };
