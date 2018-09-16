module.exports = function (app) {
    var Curso = app.models.cursos;
    var alert = require('alert-node');
    var CursosController = {
        menu: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('cursos/menu', params);
        },
        cadastroUsuario: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('cursos/cadUsuario', params);
        },
        cadastroCursos: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('cursos/cadCurso', params);
        },
        listaCursos: function (request, response) {
            Curso.find(function (erro, cursos) {
                if (erro) {
                    response.render('/menu');
                }
                else {
                    var usuario = request.session.usuario,
                        params = { usuario: usuario, cursos: cursos };
                    response.render('cursos/listaCursos', params);
                }
            });

            /*
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('eventos/listaEventos', params);
            */
        },
        //cadastro de curso
        novoCurso: function (request, response) {
            var codigo = request.body.curso.codigo;
            var descricao = request.body.curso.descricao;
            var cargaHoriaria = request.body.curso.ch;
            var categoria = request.body.curso.categoria;

            //formato dd/MM/yyyy
            //var objDate = new Date(data[2], data[1] - 1, data[0]);
            if (codigo.trim().length == 0) {
                alert('O código é obrigatório')
                response.redirect('/cadCurso');
            } else {
                //var curso = request.body.curso;
                var curso = {
                    codigo: codigo,
                    descricao: descricao,
                    ch: cargaHoriaria,
                    categoria: categoria
                };

                Curso.findOne({codigo : curso.codigo}, function (erro, cursoJaCadastrado) {
                    if (erro) {
                        curso.codigo = '';
                        var params = { usuario : request.session.usuario, curso : curso};
                        response.render('/menu', params);
                    }
                    else {
                        console.log('curso:' + cursoJaCadastrado);
                        if (cursoJaCadastrado) {
                            alert('Curso com este código já cadastrado!');
                            response.redirect('/cadCurso');
                        } else {
                            Curso.create(curso, function (erro, curso ) {
                                if (erro) {
                                    response.redirect('/cadCurso');
                                }
                                else {
                                    alert('Curso cadastrado com sucesso!');
                                    response.redirect('/menu');
                                }
                            });
                        }
                        
                    }
                });
            }
        },
        voltar: function (request, response) {
            var usuario = request.session.usuario,
            params = { usuario: usuario };
            response.render('cursos/menu', params);
        }
    };
    return CursosController;
};