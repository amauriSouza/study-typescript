// import libs and class
import {Pessoa, Profissao} from './modules'
import {Aluno} from './aluno'
import * as _ from 'lodash'

console.log(_.pad("Typescript Examples", 40, "="))

// create object class
let objPessoa = new Pessoa('Amauri');
objPessoa.mostraNome();


let objAluno = new Aluno();
objAluno.nome = 'Maurao';
objAluno.ra = 1223;
objAluno.nomeProfissao = "bb"
console.log(objAluno.ra + '-' + objAluno.mostraNome() + "-" + objAluno.nomeProfissao);
