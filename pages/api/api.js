import axios from 'axios'

const api = axios.create({
  baseURL: "https://skeleton-nodejs-express-ejs-1.tainasouza.repl.co"
})

export default api;