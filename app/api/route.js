import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

export  async function GET (request){
    const { searchParams } = new URL(request.url)
    const secret_key = searchParams.get('secret')
   if(secret_key!==process.env.MY_SECRET_TOKEN_FOR_REVALIDATE){
    NextResponse.error("wrong auth KEy")
   }
    revalidatePath("/")
    NextResponse.json("revalidate Done")
}
export async function POST (request){
    console.log(request)
}