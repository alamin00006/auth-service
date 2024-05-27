import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRoute from './app/modules/user/user.route'

const app: Application = express()

app.use(cors())
app.use(express.json())

app.use(express.urlencoded({ extended: true }))

// Application Route
app.use('/api/v1/users', userRoute)
// Testing Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Route Properly Working')
})

export default app
