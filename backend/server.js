const app = require("./src/app");
const connectDB = require("./src/db/db");
require("dotenv").config();

connectDB();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server connected at PORT: ${PORT}`);
});
