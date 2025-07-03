
//seleciona o botão
const b = document.querySelectorAll('.btn-add')

//quando o botão for clicado cria a tarefa
b.forEach(function(button){
    button.addEventListener('click', function(){
       let text = document.querySelector('.input').value
       if (text.trim() === '') {
    return;
}

//para apagar oq está escrito depois de criar a tarefa
       document.querySelector('.input').value = ''

//adiciona a tarefa na tela e o botão de excluir
       let newTask = document.createElement('div')
       newTask.classList.add('task')
       let check = document.createElement('span')
       check.classList.add('check')
       let taskText = document.createElement('p')
       taskText.textContent = text
       let bd = document.createElement('button')
       bd.textContent = 'Excluir'
       
       newTask.appendChild(check)
       newTask.appendChild(taskText)
       newTask.appendChild(bd)
       
       let list = document.querySelector('.task-list')
       list.appendChild(newTask)
//contador muda quando adicionar a tarefa
       let c = document.querySelector('.tasks .counter')
       let tasks = document.querySelectorAll('.task-list div')
       c.textContent = tasks.length 

//tira a div de empty quando adiciona uma tarefa
       let empty = document.querySelector('.empty')
       empty.style.display = "none"
       
//logica para apagar a tarefa    
       bd.addEventListener('click', function(){
           newTask.remove()
           let tasks = document.querySelectorAll('.task-list div')
           c.textContent = tasks.length
       
           if (tasks.length === 0) {
               empty.style.display = 'flex'
           }
       })
    })
})

//enter do teclado
const input = document.querySelector('.input')

input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.querySelector('.btn-add').click()
    }
})


