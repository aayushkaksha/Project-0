import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDB } from './config/db.js'
import authRoutes from './routes/auth.route.js'
import productRoutes from './routes/product.route.js'
import cartRoutes from './routes/cart.route.js'
import wishlistRoutes from './routes/wishlist.route.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const __dirname = path.resolve()

// Middleware
app.use(express.json()) // Parses incoming JSON requests
app.use(cors()) // Enables CORS for cross-origin requests

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/products', productRoutes)
app.use('/api/cart', cartRoutes)
app.use('/api/wishlist', wishlistRoutes)

if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/FrontEnd/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontEnd", "dist", "index.html"))
  })
}

// Database connection and server start
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started at http://localhost:${PORT}`)
    })
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error.message)
    process.exit(1)
  })

// Generic error handler (Catch-all)
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: 'Something went wrong on the server' })
})
