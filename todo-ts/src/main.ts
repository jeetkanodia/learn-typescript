import './style.css'

interface Todo{
  title: string,
  isCompleted: boolean,
  readonly id: string
}

const todos:Todo[] = [];

const todosContainer = document.querySelector(".todoContainer") as HTMLDivElement;

const todoInput = document.getElementsByName("title")[0] as HTMLInputElement;

const myForm = document.getElementById("myForm") as HTMLFormElement;

myForm.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();

  const todo:Todo = {
    title: todoInput.value,
    isCompleted: false,
    id:String(Math.random()*1000)
  };

  todos.push(todo);
  todoInput.value = "";
  renderTodo(todos);
};

const generateTodoItem = (item:Todo) => {
  const todo = document.createElement('div')
  todo.className = "todo";

  const checkBox = document.createElement('input')
  checkBox.setAttribute('type' , 'checkbox');
  checkBox.className='isCompleted'
  checkBox.checked = item.isCompleted;
  checkBox.onchange = () =>{
    todos.find(i=>{
      if(i.id===item.id) i.isCompleted = checkBox.checked;
  })
    paragraph.className = checkBox.checked? "textCut" : "";
  }
  const paragraph = document.createElement('p')
 paragraph.innerText = item.title
 paragraph.className = checkBox.checked? "textCut" : "";
  const btn = document.createElement('button')
  btn.innerText='X'
  btn.className='deleteBtn'
  btn.onclick = ()=> {deleteTodo(item.id)}

  todo.append(checkBox , paragraph, btn);
  todosContainer.append(todo)
}

const renderTodo = (todos: Todo[]) => {
  todosContainer.innerText = "";
  todos.forEach(item => {
    generateTodoItem(item)
  })
}

const deleteTodo = (id:string)=>{
const idx = todos.findIndex(item=>item.id===id)
todos.splice(idx,1);
renderTodo(todos)
}