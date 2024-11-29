require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const teamsRouter = require("./routes/teams");

const app = express();


app.use(cors());
app.use(express.json());


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected with MongoDb"))
  .catch((err) => console.error("Error to connect with MongoDB:", err));


app.use("/api/teams", teamsRouter);

app.get("/", (req, res) => {
  res.send("API está funcionando!");
});


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
