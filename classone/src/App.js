import { TextField } from "@mui/material";
import { useState } from "react";
import "./App.css";
import Button from "./button";
import Input from "./Input";
import NavBar from "./navbar";
import Textarea from "./textarea";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [indexNum, setIndexNum] = useState();

  let add = () => {
    if (indexNum > -1) {
      todos[indexNum] = text;
      setTodos([...todos]);
      setIndexNum(-1);
    } else {
      setTodos([...todos, text]);
    }
    setText("");
  };

  let del = (i) => {
    todos.splice(i, 1);
    setTodos([...todos]);
  };
  let edit = (i) => {
    setIndexNum(i);
    setText(todos[i]);
  };

  return (
    <div className="App">
      <NavBar />
      <h1>State</h1>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        label="Enter Text"
      />
      <Button click={add} btnValue="Add" />

      <ul>
        {todos.map((x, i) => {
          return (
            <li key={i}>
              {x}

              <Button click={() => edit(i)} btnValue="Edit" />
              <Button click={() => del(i)} btnValue="Delete" />
            </li>
          );
        })}
      </ul>
      <Button btnValue="Read More" />
      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
        sx={{ m: 2 }}
        fullWidth={true}
        variant="standard"
        label="abc"
      />
      <Textarea label="Textarea" />
    </div>
  );
}

export default App;
