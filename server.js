import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'

import Card from "./model/dbCards.js";

// App Config
const app = express();
const port = process.env.PORT || 8001;
// mongoosedb.com
const connection_url = 'mongodb+srv://admin:Putc0C91d0T62XDJ@cluster0.rgznn.mongodb.net/tinder-clone?retryWrites=true&w=majority';
// Middleware
app.use(express.json());
app.use(Cors());

// DB Password: Putc0C91d0T62XDJ
// DB Config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
// API Endpoints
app.get('/', (req, res) => {
  res.status(200).send('Hello Bao');
});

app.post('/tinder/cards', (req, res) => {
  const dbCard = req.body;

  Card.create(dbCard, (err, data) => {
    if (err) res.status(500).send(err);
    else res.status(201).send(data);
  })
});

app.get('/tinder/cards', (req, res) => {
  Card.find((err, data) => {
    if (err) res.status(500).send(err);
    else res.status(200 ).send(data);
  })
})

// Listener
app.listen(port, () => console.log(`Listening on local host: ${port}`))