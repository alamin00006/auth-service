import express, { Application, Request, Response, urlencoded } from 'express'

const app: Application = express()
const port = 3000

import cors from 'cors'

app.use(cors())
app.use(express.json())

app.use(express.urlencoded({ extended: true }))

// Testing Route
app.get('/', (req: Request, res: any) => {
  res.send('Route Properly Working')
})

export default app
