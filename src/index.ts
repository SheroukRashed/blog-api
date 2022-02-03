import express, { Application } from 'express'
import blogRoutes from '../src/routes/blogs'

const app: Application = express()
const port: number = 3000

// app.use routes takes url and routes object. now to access routes root url you need to access /api
app.use('/api', blogRoutes)

// use this function to map your app to a port
app.listen(port, () => {
  console.log(`server started on port: ${port}`)
})

export default app
