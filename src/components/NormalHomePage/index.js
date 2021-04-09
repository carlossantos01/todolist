import {Div} from './styles'
import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

const NormalHomePage = () => {
    const [todoList, setTodoList] = useState([])
    const [isTodoListUpdated, setTodoListUpdated] = useState(false)
    const history = useHistory();

    useEffect(() =>{
        let localStorageData = localStorage.getItem('todoList');
        let firstLocalStorageData = [				
            {
                "id" : 1,
                "title" : "Criar novo ToDo",
                "color" : "g",
                "isChecked" : false,
                "isDeleted" : false,
            },
        ]
        if(localStorageData === null){
            localStorage.setItem("todoList", JSON.stringify(firstLocalStorageData))
            setTodoList(firstLocalStorageData)
        }else{
            setTodoList(JSON.parse(localStorageData))
        }
    }, [])

    useEffect(() =>{
        setTodoList(JSON.parse(localStorage.getItem('todoList')))
    }, [isTodoListUpdated])

    const handleChangeToDo = (id) => {
        todoList.map(todo =>{
            if(todo.id === id){
                todo.isChecked = !todo.isChecked;
                localStorage.setItem('todoList', JSON.stringify(todoList));
                setTodoListUpdated(!isTodoListUpdated)
            }
        })
    }

    const handleDeleteToDo = (id) => {
        todoList.map((todo, index) =>{
            if(todo.id === id){
                todo.isDeleted = !todo.isDeleted;
                localStorage.setItem('todoList', JSON.stringify(todoList));
                setTodoListUpdated(!isTodoListUpdated)
            }
        })
    }

    return (
        <Div>
            <div className="div-all-todos">
                {
                    todoList.map(todo =>{
                        if(!todo.isDeleted){
                            return(
                                <div className="div-todo" key={todo.id}>
                                    <button className="btn-delete-todo" onClick={() => handleDeleteToDo(todo.id)}>X</button>
                                    <span className={todo.color}></span>
                                    <span className={todo.isChecked ? 'todo-checked' : 'todo-unchecked'}>{todo.title}</span>
                                    <input type="checkbox" className="chk-todo" onChange={() => handleChangeToDo(todo.id)} defaultChecked={todo.isChecked ? true : false}/>
                                </div>
                            )
                        }
                    })
                }
            </div>
            <div className="footer">
                <button onClick={() => history.push("/create")} className="btn-new-todo">+</button>
            </div>
        </Div>
    )
}

export default NormalHomePage;