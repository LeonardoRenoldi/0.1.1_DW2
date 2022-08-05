const gerenciadorTarefas = {
  tarefas: [
    { dataConclusao: '02/05/2022', Tarefa: 'Lavar a louça', Status: 'a fazer' },
    {
      dataConclusao: '21/07/2022',
      Tarefa: 'Mudar móveis de lugar',
      Status: 'feito',
    },
    {
      dataConclusao: '12/05/2022',
      Tarefa: 'Fazer atividades',
      Status: 'em andamento',
    },
    {
      dataConclusao: '14/05/2022',
      Tarefa: 'Pintar a casa',
      Status: 'em andamento',
    },
    { dataConclusao: '07/05/2022', Tarefa: 'Estudar', Status: 'a fazer' },
    { dataConclusao: '30/09/2022', Tarefa: 'Dormir', Status: 'feito' },
  ],
};
function checarTarefas(dataConclusao) {
  if (Status.concluido == 'a fazer' || Status.concluido == 'em andamento') {
    Status.concluido = 'feito';
  }
}
