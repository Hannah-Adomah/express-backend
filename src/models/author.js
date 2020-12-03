const mongooes = require('mongooes')

const authorSchema = new mongooes.Schema({

     name: {type: String},
     title: {type: String},
     pages: number,
     bookISBN: number ,
     likes: number,

})
const Author = mongoose.model('author', authorSchema)
module.export = Author