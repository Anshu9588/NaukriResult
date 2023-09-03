const { mongoConnect } = require("../db");
const PostModel = require("../Model/post.Model");

async function PostDataFetch(seoLink) {
  await mongoConnect();
  return  await PostModel.find({
    seoLink: seoLink,
  })
    .sort({ date: -1 })
    .then((list) => {
      return list;
    })
    .catch((error) => {
      throw error(error);
    });
}
module.exports = PostDataFetch;
