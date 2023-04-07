import axios from 'axios'
const port = import.meta.env.VITE_PORT_API || '5000'
export const Api = axios.create({
  baseURL: `http://localhost:${port}/`
})
