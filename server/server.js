const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dbConfig = require("./app/config/db.config");
const app = express();
// Routes
const authRoutes = require("./app/routes/auth");
const userRoutes = require("./app/routes/user");
const categoryRoutes = require("./app/routes/category");
const productRoutes = require("./app/routes/product");
const orderRoutes = require("./app/routes/order");

// middlewares for parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    credentials: true,
}));
app.use(cookieParser());

// Database connection
mongoose
    .connect(dbConfig.mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connect to MongoDB.");
    })
    .catch((err) => {
        console.error("Connection error", err);
        process.exit();
    });

// My routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});