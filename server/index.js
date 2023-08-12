const express = require("express")
const app = express()
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3002
const cors = require("cors")
const bodyParser = require("body-parser");
const { connectToDatabase } = require("./DB");
const routes = require("./routes/AllRoutes")



// middlewares
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use("/api", routes)


app.get("/", (req, res) => {
    res.status(200).send("You have landed on Sayan Maity's 👦 Portfolio Server !")
})



// Database connection
connectToDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});

// mongoose.connect(process.env.MONGODB_URI)
// .then(() => {
//     console.log("Database connected")
// })
// .catch((err) => {
//     console.log(err)
// })

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`)
// })