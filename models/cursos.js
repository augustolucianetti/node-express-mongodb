module.exports = function (app) {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    
    var curso = Schema({
        codigo: { type: String, required: true },
        descricao : { type: String},
        ch: { type: String},
        categoria: { type: String }
    });
    return mongoose.model('cursos', curso);
};