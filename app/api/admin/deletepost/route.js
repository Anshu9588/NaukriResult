import PostModel from "@/db/Model/post.Model";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
require("dotenv").config();
export async function POST(request) {
  const { token, seoLink } = await request.json();
  if (token.token === process.env.LOGIN_TOKEN) {
    try {
      await PostModel.deleteOne({ seoLink: seoLink });
    } catch {
      NextResponse.error("delete Faild");
    }
    revalidatePath("/");
    revalidatePath(`/[${seoLink}]`)
    revalidatePath("/category/[slug]");
    revalidatePath("/sitemap.xml");
    return NextResponse.json("POST DELETED");
  }
  NextResponse.error("TRY AGAIN INVALID try");
}
