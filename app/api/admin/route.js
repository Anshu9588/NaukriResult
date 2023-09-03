import authLogin from "@/db/loadData/authLogin";
import { NextResponse } from "next/server";
require("dotenv").config();
export async function POST(request) {
  const { userName, password } = await request.json();
  const res = await authLogin(userName, password);
  if (res) {
    return NextResponse.json({ authToken: process.env.LOGIN_TOKEN });
  }
  return NextResponse.error("Wroong id password");
}
