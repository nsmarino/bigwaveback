import express from 'express'
import apollo from './graphql'
import cors from 'cors'

// Set up Express app
const app = express()
app.use(cors())
app.use(express.json()) // body parser

// Set up GraphQL entry point
apollo.applyMiddleware({ app })

app.get('/', (req, res) => {
  res.send('Backend for big wave clothing')
})

export default app
