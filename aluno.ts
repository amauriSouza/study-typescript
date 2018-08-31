import {Pessoa, Profissao} from './modules'

export class Aluno extends Pessoa implements Profissao {
  ra: number;
  nomeProfissao: string;
  constructor() {
    super('Amauri');
    this.nomeProfissao = 'Estagiario front-end';
  }

}
