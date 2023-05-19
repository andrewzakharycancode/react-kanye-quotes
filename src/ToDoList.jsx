import React, {useState, useEffect} from 'react';

export default function ToDoList() {
  const [toDoList, setToDoList] = useState([])
  const [newToDoItem, setToDoItem] = useState({title: "", message: ""})
  const [showNewItemForm, setShowNewItemForm] = useState(false)

  const toDoListItems = toDoList.map((item) => {
    return (
      <div>
        <h4>Title: {item.title}</h4>
        <p>Message: {item.message}</p>
      </div>

    )
  })


  function handleOnClick() {
    setShowNewItemForm(prev => !prev)
  }

  function handleChange(event) {
    setToDoItem(prev => {
      return {...prev, [event.target.name]: event.target.value}
    })
  }

  function submitTodo() {
    setToDoList(prev => [...prev, newToDoItem])
    setToDoItem({title: "", message: ""})
    setShowNewItemForm(prev => !prev)
  }

  useEffect(() => {
    console.log(toDoList)
  }, [toDoList])

  return (
    <div style={{marginTop:"50px"}}>
      <h3>Todo List</h3>

      <div>
        {toDoListItems}
      </div>


      <button onClick={handleOnClick}>Add a Todo</button>
      {
        showNewItemForm === true 
        && 
        <div>
          <label htmlFor="title">Title:</label>
          <input id="title" type="text" name="title" value={newToDoItem.title} onChange={handleChange} />

          <label htmlFor="message">Message:</label>
          <input id="message" type="text" name="message" value={newToDoItem.message} onChange={handleChange} />
          <button onClick={submitTodo}>Submit</button>
        </div>
      }
    </div>
  )
}
