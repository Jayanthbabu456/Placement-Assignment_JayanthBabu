import app from "./app.js";
import mongoose from "mongoose";
import config from "./config/index.js";
(async () => {
  try {
    await mongoose.connect(config.MONGODB_URL);
    console.log("DB CONNECTED!");
    app.on("error", (err) => {
      console.error(err);
      throw err;
    });
    const onListenning = () => {
      console.log(`Listenning on PORT ${config.PORT}`);
    };
    app.listen(`${config.PORT}`, onListenning);
  } catch (error) {
    console.log(error);
    throw error;
  }
})();
