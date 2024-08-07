const prompt = require('prompt-sync')();

let livros = [];
let ultimoId = 0;

function criarLivro() {
    const titulo = prompt('Digite o título do livro: ');
    const autor = prompt('Digite o autor do livro: ');
    const ano = prompt('Digite o ano do livro: ');
    const genero = prompt('Digite o gênero do livro: ');
    const anos_novas_edicoes = prompt('Digite os anos das novas edições (separados por vírgula): ').split(',').map(item => item.trim());
    
    const id = ++ultimoId;
    livros.push({ id, titulo, autor, ano, genero, anos_novas_edicoes });
    console.log('Livro adicionado com sucesso!');
}

function listarLivros() {
    console.log('Livros no sistema:');
    livros.forEach(livro => console.log(livro));
}

function atualizarLivro() {
    const id = prompt('Digite o ID do livro para atualizar: ');
    const novoTitulo = prompt('Digite o novo título (deixe em branco para não alterar): ');
    const novoAutor = prompt('Digite o novo autor (deixe em branco para não alterar): ');
    const novoAno = prompt('Digite o novo ano (deixe em branco para não alterar): ');
    const novoGenero = prompt('Digite o novo gênero (deixe em branco para não alterar): ');
    const novosAnosNovasEdicoes = prompt('Digite os novos anos das edições (separados por vírgula, deixe em branco para não alterar): ').split(',').map(item => item.trim());

const index = livros.findIndex(livro => livro.id === parseInt(id));
    if (index !== -1) {
    const livroAtualizado = { ...livros[index] };
    if (novoTitulo) livroAtualizado.titulo = novoTitulo;
    if (novoAutor) livroAtualizado.autor = novoAutor;
    if (novoAno) livroAtualizado.ano = novoAno;
    if (novoGenero) livroAtualizado.genero = novoGenero;
    if (novosAnosNovasEdicoes.length > 0) livroAtualizado.anos_novas_edicoes = novosAnosNovasEdicoes;
    livros[index] = livroAtualizado;
    console.log('Livro atualizado com sucesso!');
    } else {
    console.log('Livro não encontrado.');
    }
}

function deletarLivro() {
    const id = prompt('Digite o ID do livro para deletar: ');
    livros = livros.filter(livro => livro.id !== parseInt(id));
    console.log('Livro deletado com sucesso!');
}

function buscarLivros() {
    const criterio = prompt('Buscar por (titulo, autor, ano, genero): ');
    const valor = prompt(`Digite o valor para ${criterio}: `);
    const resultados = livros.filter(livro => livro[criterio].toString().includes(valor));
    console.log('Resultados da busca:');
    resultados.forEach(livro => console.log(livro));
}

module.exports = {
criarLivro,
listarLivros,
atualizarLivro,
deletarLivro,
buscarLivros
};