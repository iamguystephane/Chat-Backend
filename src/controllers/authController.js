import User from "../models/user";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  const { firstName, lastName, email, phone, username, password } = req.body;

  try {
    if (!firstName || !lastName || !email || !phone || !username || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exists" });
    }

    const usernameExists = await User.findOne({ username });
    if (usernameExists) {
      return res
        .status(400)
        .json({ success: false, message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      email,
      phone,
      username,
      hashedPassword,
    });

    await newUser.save();

    res
      .status(200)
      .json({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.log("Error during user signup: ", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
