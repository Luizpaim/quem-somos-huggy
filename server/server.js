/* eslint-disable no-undef */

import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import axios from 'axios'
import 'dotenv/config'

const app = express()
const PORT = process.env.VITE_PORT_API || 5000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/api/campaign', async (req, res) => {
  try {
    const { payload } = req.body
    const response = await axios.post(`${process.env.VITE_URL_API}`, payload)
    res.json(response.data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Erro ao fazer a requisição para a API externa' })
  }
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
