import {Div} from './styles'
import {useHistory} from 'react-router-dom'
import {useState} from 'react'

const CreatePage = () =>{
    const history = useHistory();

    const [txtToDoTitle, setTxtToDoTitle] = useState("")
    const [rdToDoColor, setRdToDoColor] = useState("g")

    const handleCreateToDo = () =>{
        let toDoList = JSON.parse(localStorage.getItem('todoList'))
        let lastToDoID = toDoList[toDoList.length - 1].id;
        const newToDo = {
            "id" : lastToDoID + 1,
            "title" : txtToDoTitle,
            "color" : rdToDoColor,
            "isChecked" : false,
            "isDeleted" : false,
        }

        toDoList.push(newToDo);
        console.log(toDoList);
        localStorage.setItem('todoList', JSON.stringify(toDoList))

        history.push("/")
    }

    return(
        <>
            <Div>
                <div className="header">
                    <button onClick={() => history.push("/")} className="btn-back-to-homepage">
                        <img src="./imgs/back.svg" alt="back to homepage" className="img-btn-back-to-homepage"/>
                    </button>
                </div>
                <div className="div-txt-title-todo">
                    <input type="text" value={txtToDoTitle} onChange={(e) => setTxtToDoTitle(e.target.value)} className="txt-title-todo" placeholder="Task name here :D"/>
                </div>
                <div className="div-rd-todo-color">
                    <input type="radio" name="rd-todo-color" onClick={e => setRdToDoColor(e.target.value)}  className="rd-todo-color" value="g" defaultChecked={true}/>
                    <span className="rd-color-item-green"></span>
                    
                    <input type="radio" name="rd-todo-color" onClick={e => setRdToDoColor(e.target.value)}  className="rd-todo-color" value="y"/>
                    <span className="rd-color-item-yellow"></span>
                    
                    <input type="radio" name="rd-todo-color" onClick={e => setRdToDoColor(e.target.value)}  className="rd-todo-color" value="o"/>
                    <span className="rd-color-item-orange"></span>
                    
                    <input type="radio" name="rd-todo-color" onClick={e => setRdToDoColor(e.target.value)}  className="rd-todo-color" value="r"/>
                    <span className="rd-color-item-red"></span>
                </div>
                <div className="footer">
                    <button disabled={txtToDoTitle ? false : true} onClick={() => handleCreateToDo()} className="btn-save-todo">
                        <img src="./imgs/check.svg" alt="save" className="img-btn-save-todo"/>
                    </button>
                </div>
            </Div>
        </>
    )
}

export default CreatePage