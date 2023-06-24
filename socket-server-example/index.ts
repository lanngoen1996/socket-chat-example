import express, { Application } from 'express'

const app: Application = express()

const port = 3333

app.get('/', (_req, _res) => {
  _res.json({
    message: 'TypeScript With Express'
  })
})

app.listen(port, () => {
  console.log(`TypeScript with Express http://localhost:${port}/`)
})