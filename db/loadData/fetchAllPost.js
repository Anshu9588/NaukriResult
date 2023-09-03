const { mongoConnect } = require("../db");
const PostModel = require("../Model/post.Model");

async function AllPostDataFetch() {
  await mongoConnect();
  return await PostModel.find({})
    .sort({updatedAt: -1})
    .then((list) => {
      return list;
    })
    .catch((error) => {
      throw error(error);
    });
}
module.exports = AllPostDataFetch;
