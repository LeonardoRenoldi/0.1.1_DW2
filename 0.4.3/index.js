// run `node index.js` in the terminal

const arquivos = [
  {
    id: 1,
    nome: 'Meu Trabalho v1',
    excluido: false,
  },
  {
    id: 2,
    nome: 'Meu Trabalho v2',
    excluido: false,
  },
  {
    id: 3,
    nome: 'Meu Trabalho v3',
    excluido: false,
  },
  {
    id: 4,
    nome: 'Meu Trabalho v4',
    excluido: true,
  },
];

function invertArray(arquivos) {
  if (arquivos.excluido == true) {
    return (arquivos.excluido = false);
  } else if (arquivos.excluido == false) {
    return (arquivos.excluido = true);
  }
}

arquivos.forEach(invertArray);

console.log(arquivos);
