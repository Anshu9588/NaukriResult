const mongoose = require("mongoose");
require("dotenv").config();
const Mongo_Url = process.env.MONGO_URL;
//listen mongo coneection
mongoose.connection.once("open", () => {
  console.log("MongoDb connection ready");
});
mongoose.connection.on("error", (err) => console.log(err));
mongoose.connection.on("close", () => {
  console.log("Mongo db Closed");
});

async function mongoConnect() {
  // mongo setup
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(Mongo_Url, {
        dbName: "NaukriResult",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    } else {
      console.log("momgoDB already connected");
    }
  } catch (error) {
    console.log(error, "dberror");
  }
}
async function mongoDisconnect() {
  await mongoDisconnect();
}
module.exports = { mongoConnect, mongoDisconnect };
