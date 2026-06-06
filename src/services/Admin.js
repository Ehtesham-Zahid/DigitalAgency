import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import Admin from "@/models/Admin";

const JWT_SECRET = process.env.JWT_SECRET;

export const createAdmin = async (username, password) => {
  try {
    await connectDB();
    
    const exists = await Admin.findOne({ username });
    if (exists) {
      throw new Error("Admin username already exists.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = new Admin({ username, password: hashedPassword });
    await admin.save();
    
    return { success: true, username: admin.username };
  } catch (error) {
    console.error("Error creating admin:", error);
    throw error;
  }
};

export const login = async (username, password) => {
  try {
    await connectDB();
    
    const admin = await Admin.findOne({ username });
    if (!admin) {
      throw new Error("Invalid username or password.");
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      throw new Error("Invalid username or password.");
    }
    const token = jwt.sign(
      { id: admin._id, username: admin.username },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    const cookieStore = await cookies();
    cookieStore.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24,
      path: "/"
    });

    return { success: true, username: admin.username };
  } catch (error) {
    console.error("Error logging in admin:", error);
    throw error;
  }
};

export const logout = async () => {
  try {
    const cookieStore = await cookies();
    cookieStore.set("admin_token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 0,
      path: "/"
    });
    return { success: true };
  } catch (error) {
    console.error("Error logging out admin:", error);
    throw error;
  }
};

export const verifyAdminToken = async () => {
  try {
    const cookieStore = await cookies();
    const tokenCookie = cookieStore.get("admin_token");
    if (!tokenCookie || !tokenCookie.value) {
      return null;
    }

    const decoded = jwt.verify(tokenCookie.value, JWT_SECRET);
    return decoded;
  } catch (error) {
    console.error("Admin token verification failed:", error);
    return null;
  }
};
