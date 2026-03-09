const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
  // 1. Get token from request headers
  const authHeader = req.headers['authorization']

  // 2. Check if token exists
  if (!authHeader) {
    return res.status(401).json({ error: 'Access denied. No token provided.' })
  }

  // 3. Token comes as "Bearer tokengoeshere" — we only want the token part
  const token = authHeader.split(' ')[1]

  // 4. Verify the token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (error) {
    res.status(401).json({ error: 'Invalid or expired token.' })
  }
}

module.exports = verifyToken