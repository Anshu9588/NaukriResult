import HomeHeadingFetch from "@/db/loadData/homeHeading";
import { NextResponse } from "next/server";
require("dotenv").config();
export async function POST(request) {
  const { token } = await request.json();
  if (token.token !== process.env.LOGIN_TOKEN) {
    return NextResponse.error("tokken error");
  }
  const data = await HomeHeadingFetch()
  return NextResponse.json(data[0]);
}

