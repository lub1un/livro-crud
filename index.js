const prompt = require('prompt-sync')();

const { criarLivro, listarLivros, atualizarLivro, deletarLivro, buscarLivros } = require('./beckend.js');

function mostrarMenu() {
    console.log(`
    Escolha uma opção:
    1. Adicionar um livro
    2. Listar todos os livros
    3. Atualizar um livro
    4. Deletar um livro
    5. Buscar um livro
    6. Sair
    `);
}

while (true) {
    mostrarMenu();
    const opcao = prompt('Digite sua escolha: ');
    tratarMenu(opcao);
}
function tratarMenu(opcao) {
    switch(opcao) {
    case '1':
        criarLivro();
        break;
    case '2':
        listarLivros();
        break;
    case '3':
        atualizarLivro();
        break;
    case '4':
        deletarLivro();
        break;
    case '5':
        buscarLivros();
        break;
    case '6':
        console.log('Saindo...');
        process.exit(0);
    default:
        console.log('Opção inválida. Por favor, escolha novamente.');
    }
}
