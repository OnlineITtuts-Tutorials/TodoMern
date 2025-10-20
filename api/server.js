const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");

dotenv.config({ path: "./config.env" });

const DB = process.env.MONGODB_URI;

// Connection cache for serverless
let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    console.log("Using existing database connection");
    return;
  }

  try {
    const db = await mongoose.connect(DB, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });

    isConnected = db.connections[0].readyState === 1;
    console.log("DB connection successful");
  } catch (error) {
    console.error("DB connection error:", error.message);
    throw error;
  }
};

// Connect to DB before handling any request
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    res.status(500).json({
      message: "Database connection failed",
      error: error.message,
    });
  }
});

// Export for Vercel (serverless)
module.exports = app;

// For local development only
if (require.main === module) {
  const port = process.env.PORT || 3000;
  connectDB().then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  });
}
