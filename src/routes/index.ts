import { Router } from 'express'

const routes = Router()

routes.get('/', (req, res) => {
  return res.send("Hello World!")
})

routes.get('/health', (req, res) => {
  res.send("Health check!")
})

export default routes
