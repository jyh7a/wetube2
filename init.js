import "./db"
import app from './app'
import dotevn from "dotenv"
dotevn.config()
import "./models/Video"
import "./models/Comment"

const PORT = process.env.PORT || 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`)


app.listen(PORT, handleListening)