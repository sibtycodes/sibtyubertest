import mongoose from "mongoose";
const connecttoDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://asadrafi:deployedmongodb@deploymentdb.tlz4k.mongodb.net/yourDatabaseName?retryWrites=true&w=majority&appName=deploymentdb",
      {


        serverSelectionTimeoutMS: 30000, // Timeout after 10 seconds
      }
    );
    console.log("Database is connected");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    process.exit(1); // Exit process with failure
  }
};

export default connecttoDb;
