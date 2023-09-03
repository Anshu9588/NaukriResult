import HomeHeading from "../Model/homeHeading.Model";
import { mongoConnect } from "../db";
const HomeHeadingFetch = async () => {
  await mongoConnect();
  return await HomeHeading.find({})
    .then((list) => {
      return list;
    })
    .catch((error) => {
      throw error(error);
    });
};
export default HomeHeadingFetch;
