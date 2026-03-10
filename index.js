require('dotenv').config()
const express = require('express')
const { clerkMiddleware, getAuth } = require('@clerk/express')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')
const pool = require('./db')
const authRoutes = require('./auth')

const app = express()

// Security middleware
app.use(clerkMiddleware())
app.use(helmet())
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Auth routes
app.use('/api/auth', authRoutes)

// GET — public route (anyone can access)
app.get('/api/products', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products ORDER BY id')
    res.json(result.rows)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// GET — protected route (only logged in users)
app.get('/api/profile', (req, res) => {
  const auth = getAuth(req)
  if (!auth.isAuthenticated) {
    return res.status(401).json({ error: 'User not authenticated' })
  }
  res.json({ message: 'Welcome!', user: auth })
})

app.listen(process.env.PORT || 4000, () => console.log(`Server on port ${process.env.PORT || 4000}...`))