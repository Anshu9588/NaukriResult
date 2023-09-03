import HomeHeading from "@/db/Model/homeHeading.Model";
import { mongoConnect } from "@/db/db";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
require("dotenv").config();
export async function POST(request) {
  const { token, marquee, heading } = await request.json();

  if (token.token === process.env.LOGIN_TOKEN) {
    try {
      await mongoConnect();
      const data = { marqueeRow: marquee, headingBox: heading };
      await HomeHeading.updateMany({ _id: "64ccc9c9e367e058b3a5ef52" }, data);
    } catch (error) {
      return NextResponse.error("error", error);
    }
    revalidatePath("/");
    revalidatePath("/sitemap.xml");
    return NextResponse.json("updated Succesful");
  } else {
    return NextResponse.error("not Updated");
  }
}
