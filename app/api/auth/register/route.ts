import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDb from "@/lib/connectdb";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();
    console.log("name", name);
    console.log("eamil : ", email);
    console.log("password : ", password);
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "all details are Required!" },
        { status: 404 }
      );
    }
    console.log("11111111");
    await connectDb();

    const userExists = await User.findOne({
      email: email,
    });

    if (userExists) {
      return NextResponse.json(
        { error: "user already exists!" },
        { status: 404 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "unable to Register" }, { status: 404 });
  }
}
