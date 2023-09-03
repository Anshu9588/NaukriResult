import authLoginSchema from "../Model/login.Model";
import { mongoConnect } from "../db";

export default async function authLogin(user, pass) {
  await mongoConnect();
  const { userName, password } = await authLoginSchema
    .find({})
    .then((list) => list[0]);
  if (user === userName && pass === password) return true;
  return false;
}
