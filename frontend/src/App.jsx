// 親コンポーネント
import { useState } from 'react'
import './App.css'
import { Title } from './components/TITLE/Title';
import { InputTodo } from './features/TODO/InputTodo';
import { TodoList } from './features/TODO/TodoList';
import { DoneTodo } from './features/TODO/DoneTodo';

function App() {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  // 入力
  const inputValue = (e) => {
    setText(e.target.value);
  }

  // 追加
  const addTodo = async () => {
    if (!text.trim()) return;

    try {
      const response = await fetch('http://localhost:8000/api/todos', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: text,
        }),
      });
      if (response.ok) {
        const newTodo = await response.json();
        setTodoList([...todoList, newTodo]);
        setText("");
      } else {
        console.log('保存失敗');
      }
      }catch (error) {
        console.error(error);
    }
  }

   // 完了
  const doneTodo = async (index) => {
    const doneItem = todoList[index];

    try {
      const response = await fetch(`http://localhost:8000/api/todos/${doneItem.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          is_done: true,
        }),
      });
    if (response.ok) {
      setDoneList([...doneList, doneItem]);
      setTodoList(todoList.filter((_, i) => i !== index));
      }else {
        console.log('保存失敗');
      }
    }catch (error) {
      console.error(error);
      }
    };

  // 削除
  const deleteTodo = (index) => {
    setDoneList(doneList.filter((_, i) => i !== index));
  };


  return (
    <>
      <Title>TODO</Title>

      <div className="app-container">
      <InputTodo
        text={text}
        inputValue={inputValue}
        addTodo={addTodo}
        />
        </div>

      <div className="lists-container">
        <div className="list-card">
          <TodoList
            todoList={todoList}
            doneTodo={doneTodo}
          />
        </div>

        <div className="list-card">
          <DoneTodo
            doneList={doneList}
            deleteTodo={deleteTodo}
        />
        </div>
      </div>
    </>
  );
}
export default App
