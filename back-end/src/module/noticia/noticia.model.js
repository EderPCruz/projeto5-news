const mongoose = require('../../src/config/mogo.js');
const { Schema } = mongoose;

const noticiaSchema = new Schema(
{
  titulo: String, // String is shorthand for {type: String}
  img: String,
  texto: String,
  categoria: String,

},

{
    timestamps: true,
}
);

const NoticiaModel = mongoose.model('noticias', noticiaSchema);


module.exports = NoticiaModel;