import PostModel from "@/db/Model/post.Model";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
export async function POST(request) {
  const { token, data } = await request.json();
  if (token.token === process.env.LOGIN_TOKEN) {
    try {
      await PostModel.updateMany({ seoLink: data.seoLink }, data);
    } catch (error) {
      console.log(error);
      return NextResponse.error(error);
    }
    revalidatePath("/");
    revalidatePath("/sitemap.xml");
    revalidatePath(`/[${data.seoLink}]`)
    revalidatePath("/category/[slug]");
    return NextResponse.json("post Updated");
  } else {
    NextResponse.error("failed");
  }
}
