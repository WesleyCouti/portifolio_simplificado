const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos')
const projetosinativos = document.querySelectorAll('.projeto:not(.ativo)')

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos()
    esconderBotao()
})
function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover')
}

function mostrarMaisProjetos() {
    projetosinativos.forEach(projetoinativo => {
        projetoinativo.classList.add('ativo')
    })
}

