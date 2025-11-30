const express = require("express");
const { ServerConfig, Logger } = require("./config");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.listen(ServerConfig.port, () => {
  Logger.info(`Server is running on port ${ServerConfig.port}`);
});
