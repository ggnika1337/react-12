import { useState } from "react";
import "./App.css";
import Comment from "./components/__organisms/Comment/Comment";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Comment />
    </>
  );
}

export default App;
