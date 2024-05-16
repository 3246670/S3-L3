class TODOList{
    constructor(){
        this.tasks = []
        console.log("tasks", this.tasks)
    }
    aggiungiTask(task){
        this.tasks.push(task);
        console.log("tasks",this.tasks);

        const todo = document.getElementById ("todo")
        const p = documet.createElement("p")
        p.appendChild(document.createTextNode(task))
        todo.appendChild(p)
        p.addEventListener("click", (e)=>{
            this.concludiTask(task)
            console.log(e.srcElement)
        })
        


    }
    concludiTask(){
        console.log('${task} completato');
        console.log(this.tasks);
        const index = this.tasks.indexOf(task)
        console.log(index)
        console.log(this.tasks[index]);
        this.tasks.splice(index,1)
    }
    
        }
    




const newtaskbtn = document.getElementById("new-task-btn")
const clearBtn = document. getElementById("clear-btn")
const input = document.getElementById("new-task")

const todolist = new TODOList()

newtaskbtn.addEventListener("click",()=>{
console.log( input.value);
todolist.aggiungiTask(input.value);

});
clearBtn.addEventListener("click",()=>{
console.log("pulisci task");

});
input.addEventListener("keypress",(e)=>{
    if(e.key === "Enter"){
        console.log(input.value);
        todolist.aggiungiTask(input.value);
        input.value ="";
    }
});

