
//seleciona o botão
const b = document.querySelectorAll('.btn-add')

//quando o botão for clicado cria a tarefa
b.forEach(function(button){
    button.addEventListener('click', function(){
       let text = document.querySelector('.input').value
       console.log(text) 

//adiciona a tarefa na tela e o botão de excluir
       let newTask = document.createElement('div')
       newTask.textContent = text
       let bd = document.createElement('button')
       bd.textContent = 'Excluir'
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

