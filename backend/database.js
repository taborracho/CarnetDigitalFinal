const mongoose = require("mongoose")

const atlas = "mongodb+srv://tavo:Juan2015@cluster0.diuoh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


mongoose.connect(atlas, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log("Conectado Correctamente a la BD :)"))
    .catch(err => console.log(err))

module.exports = mongoose;