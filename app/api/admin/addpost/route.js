import { NextResponse } from "next/server";
import PostModel from "@/db/Model/post.Model";
import { revalidatePath } from "next/cache";
require("dotenv").config();
export async function POST(request) {
  let { token, data } = await request.json();
  function makeURLSEOFriendly(url) {
    let seoURL = url.toLowerCase();
    seoURL = seoURL.replace(/[\s,&/]/g, "-");
    seoURL = seoURL.replace(/[^a-z0-9\-]/g, "");
    seoURL = seoURL.replace(/-{2,}/g, "-");
    seoURL = seoURL.replace(/^-+|-+$/g, "");
    seoURL = seoURL.substring(0, 100);
    return seoURL;
  }
  const seoLink = makeURLSEOFriendly(data.nameOfPost) 
  data ={...data,seoLink,}
  if (token.token === process.env.LOGIN_TOKEN) {
    try {
      await PostModel.insertMany(data).catch((error) => {
        throw new Error(error);
      });
      revalidatePath("/sitemap.xml")
      revalidatePath("/")
      revalidatePath(`/[${seoLink}]`)
      revalidatePath("/category/[slug]")
    } catch (error) {
      return NextResponse.error(error);
    }
    return NextResponse.json("new Erroradded");
  } else {
    console.log("invalid token");
    return NextResponse.error("Invalid Token");
  }
}
