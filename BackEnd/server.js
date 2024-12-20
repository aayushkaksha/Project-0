import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT

app.use(express.json()) //allows us to accept JSON data in the req.body

app.use("/api/products", productRoutes)

//postman

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server started at http://localhost:${PORT}`);
    });
}).catch((error) => {
    console.error("Failed to connect to MongoDB:", error.message);
    process.exit(1);
});

