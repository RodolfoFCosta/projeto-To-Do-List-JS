const button = document.querySelector('.btn');
const input = document.querySelector('.input-text');
const listaCompleta = document.querySelector('.list-task')


let listaItens = []


function addTarefa() {
    listaItens.push({
        tarefa: input.value,
        concluida: false
    })


    input.value = ''

    mostrarTarefa()
}

function mostrarTarefa() {

    let novaTabela = ' ';

    listaItens.forEach((item, index) => {
        novaTabela = novaTabela +
            `
            <li class="task ${item.concluida && "done"} ">
                <img  src="/img/checked.png" alt="check-na-tarefa" onclick="checkTarefa(${index})">
                <p class="texto">
                    ${item.tarefa}
                </p>
                <img src="/img/trash.png" alt="remover-tarefa" onclick="deletarItem(${index})" >
            </li>
        `
    })

    listaCompleta.innerHTML = novaTabela


    localStorage.setItem('lista', JSON.stringify(listaItens))
}

function deletarItem(index) {
    listaItens.splice(index, 1)

    mostrarTarefa()
}

function checkTarefa(index) {
    listaItens[index].concluida = !listaItens[index].concluida

    mostrarTarefa()
}

function recarregarTarefa() {
    const tarefalocal = localStorage.getItem('lista')

    if (tarefalocal) {
        listaItens = JSON.parse(tarefalocal)
    }

    mostrarTarefa()
}

recarregarTarefa()
button.addEventListener('click', addTarefa)