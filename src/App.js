import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState([]);
  const inputRef = useRef();

  const handleTodo = (event) => {
    event.preventDefault(); // Prevents the form from refreshing the page
    
    const text = inputRef.current.value;
    if (text.trim() === "") return; // Prevent adding empty tasks
    
    const newItem = { complete: false, text };
    setTodo([...todo, newItem]);
    inputRef.current.value = "";
  };

  const handleItemDone = (index) => {
    const NewTodo = [...todo];
    NewTodo[index].complete = !NewTodo[index].complete;
    setTodo(NewTodo);
  };

  const handleDeleteItem = (index) => {
    const NewTodo = [...todo];
    NewTodo.splice(index, 1);
    setTodo(NewTodo);
  };

  return (
    <div className='chil'>
      <div className="App">
        <h1>Daily Work🥱</h1>
        <div className='container'>
          <ul>
            {todo.map(({ text, complete }, index) => (
              <div className='item' key={index}>
                <li className={complete ? "done" : ""} onClick={() => handleItemDone(index)}>
                  {text}
                </li>
                <span onClick={() => handleDeleteItem(index)} className='exit'>❌</span>
              </div>
            ))}
          </ul>
          <form onSubmit={handleTodo}>
            <input className='inp' ref={inputRef} placeholder='Enter your Task..' />
            <button className='btn' type='submit'>Add New Mission</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
