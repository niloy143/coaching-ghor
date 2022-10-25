import { useContext } from "react";
import { ContextCreator } from "./ContextProvider/ContextProvider";

function App() {
  const meAndYou = useContext(ContextCreator);
  return (
    <div>
      {console.log(meAndYou)}
    </div>
  );
}

export default App;
