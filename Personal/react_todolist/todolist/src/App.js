import logo from './logo.svg';
import './App.css';

function App() {
  const [inputValue, setinputvalue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const addItem = () => {
    setTodoList([...todoList, inputValue]);
  }
  return (
    <main>
      {/* 인풋창에서 입력한 값 저장해주기 */}
      <input value = {inputValue} type="text" onChange={(event) => {setinputvalue(event.target.value)}}></input>
      <button onClick={addItem}>추가</button>

      {/* 저장한거 전달하기 -> props */}
      <TodoBoard todoList={todoList}/>
    </main>
  );
}

export default App;
