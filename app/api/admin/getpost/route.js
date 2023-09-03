import PostDataFetch from "@/db/loadData/postData";
import { NextResponse } from "next/server";
require("dotenv").config();
export async function POST(request) {
  const { token, seoLink } = await request.json();
  if (token.token === process.env.LOGIN_TOKEN) {
    const data = await PostDataFetch(seoLink);
    return NextResponse.json(data[0]);
  } else {
    return NextResponse.error("NOT Found or invalid login");
  }
}
