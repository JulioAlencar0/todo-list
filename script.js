
//seleciona o botão
const b = document.querySelectorAll('.btn-add')

//quando o botão for clicado cria a tarefa
b.forEach(function(button){
    button.addEventListener('click', function(){
       let text = document.querySelector('.input').value
       console.log(text) 
       let newTask = document.createElement('div')
       newTask.textContent = text
       let list = document.querySelector('.task-list')
       list.appendChild(newTask)

       //contador muda quando adicionar a tarefa
       let c = document.querySelector('.tasks .counter')
       let tasks = document.querySelectorAll('.task-list div')
       c.textContent = tasks.length 

       //tira a div de empty quando adiciona uma tarefa
       let empty = document.querySelector('.empty')
       empty.style.display = "none"

    })
})

