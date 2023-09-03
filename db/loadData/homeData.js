import  HomeHeading  from "../Model/homeHeading.Model"
import { mongoConnect } from "../db";
import PostModel from "../Model/post.Model";

async function homeDataFetch() {
    await mongoConnect()
    const headingBox = await HomeHeading.find({}).then(list => { return list }).catch(error => { throw error(error) })
   const post = await PostModel.find({}).sort({updatedAt: -1}).then(list=>list).catch(error=>{throw new Error(error)})
    return [["homeHeading", headingBox[0]],["post",post]]
}
module.exports = homeDataFetch
