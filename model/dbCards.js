import mongoose from 'mongoose'

const cardSchema = mongoose.Schema({
  name: String,
  img_url: String
})

export default mongoose.model('card', cardSchema);