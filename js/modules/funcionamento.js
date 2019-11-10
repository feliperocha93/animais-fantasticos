export default class Funcionamento {
  constructor(funcionamento) {
    this.funcionamento = document.querySelector(funcionamento);
    this.dataAtual = new Date();
  }

  verificaHorario() {
    const horario = this.funcionamento.dataset.horario.split(',').map(Number);
    const horarioAtual = this.dataAtual.getHours();
    if (horarioAtual >= horario[0] && horarioAtual <= horario[1]) {
      this.verificaDia();
    }
  }

  verificaDia() {
    const dias = this.funcionamento.dataset.semana.split(',').map(Number);
    const diaAtual = this.dataAtual.getDay();
    if (diaAtual >= dias[0] && diaAtual <= dias[4]) {
      this.defineAberto();
    }
  }

  defineAberto() {
    this.funcionamento.classList.add('aberto');
  }

  init() {
    this.verificaHorario();
  }
}
