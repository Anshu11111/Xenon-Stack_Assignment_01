import mongoose from "mongoose";

const mongoURI = process.env.MONGO_URI || 'mongodb+srv://anshuanand0901:t1nTE2a993Sa3lg3@cluster0.tcxd9.mongodb.net/prepp?retryWrites=true&w=majority&tlsInsecure=true';


export const connectDB = async () => {
  try {
    console.log("mongo_uri: ", mongoURI); // Logs the actual URI used
    const conn = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error.message);
    process.exit(1); // Exit with failure code
  }
};
