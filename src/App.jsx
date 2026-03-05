import { useState } from "react";
import "./App.css";
import Comments from "./components/__organisms/Comment/Comments";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Comments />
    </>
  );
}

export default App;
